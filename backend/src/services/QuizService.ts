import QuestionModel from "../models/QuestionModel";

class QuizService {
  async getRandomQuestions(difficulty: string, count: number = 10) {
    try {
      let query = {};
      if (difficulty !== "any") {
        query = { difficultyLevel: difficulty };
      }

      const questions = await QuestionModel.aggregate([
        { $match: query },
        { $sample: { size: count } },
      ]);

      return questions;
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
        const isCorrect =
          question.correctOption === answers[index].selectedOption;
        const score = isCorrect ? question.marksAllocated : 0;
        totalScore += score;
        return {
          question: question.question,
          userAnswer: answers[index].selectedOption,
          correctAnswer: question.correctOption,
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