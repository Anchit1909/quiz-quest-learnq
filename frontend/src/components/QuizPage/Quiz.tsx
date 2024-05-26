"use client";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useResultStore } from "@/hooks/useStore";
import "katex/dist/katex.min.css";
import { detectLatex } from "@/utils/DetectLatex";

interface Question {
  _id: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: number;
  marksAllocated: number;
  difficultyLevel: string;
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const router = useRouter();
  const { setQuizResult } = useResultStore() as {
    setQuizResult: (result: any) => void;
  };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [answers, setAnswers] = useState<
    { questionId: string; selectedOption: number | null }[]
  >(
    questions.map((question: Question) => ({
      questionId: question._id,
      selectedOption: null,
    }))
  );

  const handleChoiceSelection = (option: number) => {
    setSelectedChoice(option);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = {
      ...newAnswers[currentQuestionIndex],
      selectedOption: option,
    };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(
        answers[currentQuestionIndex + 1]?.selectedOption || null
      );
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedChoice(
        answers[currentQuestionIndex - 1]?.selectedOption || null
      );
    }
  };

  const handleSubmit = async () => {
    const finalAnswers = answers.map((answer) => ({
      questionId: answer.questionId,
      selectedOption:
        answer.selectedOption !== null ? answer.selectedOption : 0,
    }));
    console.log("Quiz submitted with answers: ", finalAnswers);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}/quiz/submit-answers`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answers: finalAnswers }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit answers");
      }

      const result = await response.json();
      console.log("Submission result:", result);
      setQuizResult(result);
      router.push("/result");
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex] as any;

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 md:w-[80vw] max-w-4xl w-[90vw] top-1/2 left-1/2">
      <Card className="w-full mt-4">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="mr-5 text-center divide-y divide-zinc-600/50">
            <div>Question {currentQuestionIndex + 1}</div>
            <div className="text-base text-slate-400">{questions.length}</div>
          </CardTitle>
          <CardDescription className="flex-grow text-lg">
            {detectLatex(currentQuestion.question)}
          </CardDescription>
        </CardHeader>
      </Card>
      <div className="flex flex-col items-center justify-center w-full mt-4">
        {[1, 2, 3, 4].map((option) => (
          <Button
            key={option}
            variant={selectedChoice === option ? "default" : "outline"}
            className="justify-start w-full py-8 mb-4"
            onClick={() => handleChoiceSelection(option)}
          >
            <div className="flex items-center justify-start">
              <div className="p-2 px-3 mr-5 border rounded-md">{option}</div>
              <div className="text-start">
                {detectLatex(currentQuestion[`option${option}`])}
              </div>
            </div>
          </Button>
        ))}
        <div className="flex justify-between w-full">
          <Button
            variant="default"
            className="mt-2"
            size="lg"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Previous
          </Button>
          <Button
            variant="default"
            className="mt-2"
            size="lg"
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
        <Button
          variant="default"
          className="mt-2"
          size="lg"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
