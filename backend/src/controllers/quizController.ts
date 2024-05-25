import { NextFunction, Request, Response } from "express";
import { QuizService } from "../services/QuizService";

const quizService = new QuizService();

const getQuestions = async (req: Request, res: Response) => {
  const difficulty: string = (req.query.difficulty as string) || "any";
  try {
    const questions = await quizService.getRandomQuestions(difficulty);
    res.json(questions);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { getQuestions };
