import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Result {
  question: string;
  userAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  score: number;
}

type ResultState =
  | {
      quizResult: Result | null;
      setQuizResult: (result: Result | null) => void;
    }
  | { quizResult: Result[]; setQuizResult: (result: Result[]) => void };

export const useResultStore = create(
  persist(
    (set) => ({
      quizResult: null,
      setQuizResult: (result: Result | Result[]) =>
        set((state: any) => ({ ...state, quizResult: result })),
    }),
    { name: "quiz-result" }
  )
);
