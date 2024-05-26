import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { detectLatex } from "@/utils/DetectLatex";

type Props = {
  questions: {
    question: string;
    userAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    score: number;
  }[];
};

const QuestionsList = ({ questions }: Props) => {
  return (
    <Table className="mt-4 mb-8">
      <TableCaption>End of list.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[10px]">No.</TableHead>
          <TableHead>Question & Correct Answer</TableHead>
          <TableHead>Your Answer</TableHead>
          <TableHead className="w-[10px] text-right">Accuracy</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <>
          {questions.map(
            (
              { question, userAnswer, correctAnswer, isCorrect, score },
              index
            ) => {
              return (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    {question} <br />
                    <br />
                    <span className="font-semibold">
                      Correct Answer: {correctAnswer}
                    </span>
                  </TableCell>
                  <TableCell
                    className={`${
                      isCorrect ? "text-green-600" : "text-red-600"
                    } font-semibold`}
                  >
                    {userAnswer}
                  </TableCell>
                  <TableCell className="text-right">
                    {isCorrect ? "Correct" : "Incorrect"}
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </>
      </TableBody>
    </Table>
  );
};

export default QuestionsList;
