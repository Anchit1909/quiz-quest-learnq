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
}

export { QuizService };
