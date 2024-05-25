import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  quizResult: any;
  setQuizResult: (result: any) => void;
};


export const useResultStore = create(
  persist(
    (set) => ({
      quizResult: null,
      setQuizResult: (result: any) => set({ quizResult: result }),
    }),
    { name: "quiz-result" }
  )
);
