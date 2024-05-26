"use client";

import Footer from "@/components/Navigation/Footer";
import QuestionsList from "@/components/ResultPage/QuestionsList";
import ResultsCard from "@/components/ResultPage/ResultsCard";
import { useResultStore } from "@/hooks/useStore";
import React from "react";

const Result = () => {
  const { quizResult } = useResultStore() as any;
  return (
    <>
      <div className="p-8 mx-auto max-w-7xl">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Summary</h2>
        </div>

        <div className="grid gap-4 mt-4 md:grid-cols-7">
          <ResultsCard
            score={quizResult.totalScore}
            totalQuestions={quizResult.scoreDetails.length}
          />
        </div>
        <QuestionsList questions={quizResult.scoreDetails} />
        <Footer />
      </div>
    </>
  );
};

export default Result;
