import { Request, Response } from "express";
import { QuizService } from "../services/QuizService";

const quizService = new QuizService();

const getQuestions = async (req: Request, res: Response) => {
  const difficulty: string = (req.query.difficulty as string) || "Any";
  try {
    const questions = await quizService.getRandomQuestions(difficulty);
    res.json(questions);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const submitAnswers = async (req: Request, res: Response) => {
  const { answers } = req.body;
  try {
    const { totalScore, scoreDetails } = await quizService.calculateScore(
      answers
    );
    res.json({ totalScore, scoreDetails });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { getQuestions, submitAnswers };
