import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Trophy } from "lucide-react";
type Props = { score: number; totalQuestions: number };

const ResultsCard = ({ score, totalQuestions }: Props) => {
  const percentage = Number(((score / totalQuestions) * 100).toFixed(2));
  return (
    <Card className="md:col-span-7">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
        <CardTitle className="text-2xl font-bold">Results</CardTitle>
        <Award />
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center h-3/5">
        <div className="flex flex-col text-2xl font-semibold text-yellow-400 mb-4">
          <span className="">
            Your Score: {score}/{totalQuestions}
          </span>
        </div>
        {score > 75 ? (
          <>
            <Trophy className="mr-4" stroke="gold" size={50} />
            <div className="flex flex-col text-2xl font-semibold text-yellow-400">
              <span className="">Impressive!</span>
              <span className="text-sm text-center text-black opacity-50">
                {percentage}%
              </span>
            </div>
          </>
        ) : score > 25 ? (
          <>
            <Trophy className="mr-4" stroke="silver" size={50} />
            <div className="flex flex-col text-2xl font-semibold text-stone-400">
              <span className="">Good job!</span>
              <span className="text-sm text-center text-black opacity-50">
                {percentage}%
              </span>
            </div>
          </>
        ) : (
          <>
            <Trophy className="mr-4" stroke="brown" size={50} />
            <div className="flex flex-col text-2xl font-semibold text-yellow-800">
              <span className="">Nice try!</span>
              <span className="text-sm text-center text-black opacity-50">
                {percentage}%
              </span>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
