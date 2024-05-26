import QuestionModel from "../models/QuestionModel";

function wrapMathExpressions(text: string) {
  const escapedText = text.replace(/\\/g, "\\\\");
  const formattedText = escapedText.replace(/\$/g, "\\$");
  return `\\(${formattedText}\\)`;
}

class QuizService {
  async getRandomQuestions(difficulty: string, count: number = 10) {
    try {
      let query = {};
      if (difficulty !== "Any") {
        query = { difficultyLevel: difficulty };
      }

      const questions = await QuestionModel.aggregate([
        { $match: query },
        { $sample: { size: count } },
      ]);

      const wrappedQuestions = questions.map((question) => ({
        ...question,
        question: wrapMathExpressions(question.question),
        option1: wrapMathExpressions(question.option1),
        option2: wrapMathExpressions(question.option2),
        option3: wrapMathExpressions(question.option3),
        option4: wrapMathExpressions(question.option4),
      }));

      return wrappedQuestions;
    } catch (error: any) {
      throw new Error("Error fetching questions: " + error.message);
    }
  }

  async calculateScore(
    answers: { questionId: string; selectedOption: number }[]
  ) {
    try {
      const questions = await QuestionModel.find({
        _id: { $in: answers.map((ans) => ans.questionId) },
      });

      let totalScore = 0;

      const scoreDetails = questions.map((question, index) => {
        const userOption = `option${answers[index].selectedOption}`;
        let userAnswer = (question as any)[userOption];
        const correctOption = `option${question.correctOption}`;
        const correctAnswer = (question as any)[correctOption];

        const isCorrect =
          userAnswer &&
          answers[index].selectedOption === question.correctOption;
        if (userAnswer === undefined) userAnswer = "";

        const score = isCorrect ? question.marksAllocated : 0;
        totalScore += score;

        return {
          question: question.question,
          userAnswer: userAnswer,
          correctAnswer: correctAnswer,
          isCorrect,
          score,
        };
      });

      return { totalScore, scoreDetails };
    } catch (error: any) {
      throw new Error("Error calculating score: " + error.message);
    }
  }
}

export { QuizService };
