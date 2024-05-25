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

type Props = {
  questions: {
    question: string;
    userAnswer: number;
    correctAnswer: number;
    isCorrect: boolean;
    score: number;
  }[];
};

const QuestionsList = ({ questions }: Props) => {
  return (
    <Table className="mt-4">
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
