"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, ChevronDown, Copy } from "lucide-react";
import { toast } from "../ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { useRouter } from "next/navigation";

const InputBox = () => {
  const router = useRouter();
  const [difficulty, setDifficulty] = useState<string>("any");
  const handleSelectDifficulty = (difficulty: string) => {
    setDifficulty(difficulty);
  };
  const handleStartQuiz = () => {
    router.push(`/quiz?difficulty=${difficulty}`);
  };
  return (
    <Card className="w-[350px] sm:w-[450px]">
      <CardHeader className="items-center">
        <CardTitle>Quiz Master</CardTitle>
        <CardDescription>Select Quiz Difficulty</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-2 border-gray-300 rounded-sm px-4">
            <div className="flex items-center space-x-2">
              <span>
                {difficulty.charAt(0).toUpperCase() +
                  difficulty.slice(1).toLowerCase()}
              </span>
              <ChevronDown className="w-4 h-4 mr-2" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleSelectDifficulty("Easy")}>
              Easy
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSelectDifficulty("Medium")}>
              Medium
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSelectDifficulty("Hard")}>
              Hard
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSelectDifficulty("Any")}>
              Any
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Button onClick={handleStartQuiz}>Start Quiz</Button>
      </CardFooter>
    </Card>
  );
};

export default InputBox;
