"use client";

import * as React from "react";
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
import { Check, Copy } from "lucide-react";
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

const InputBox = () => {
  return (
    <Card className="w-[350px] sm:w-[450px]">
      <CardHeader className="items-center">
        <CardTitle>Quiz Master</CardTitle>
        <CardDescription>Select Quiz Difficulty</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="border-2 border-gray-300 rounded-sm px-4">
            Easy
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Easy</DropdownMenuItem>
            <DropdownMenuItem>Medium</DropdownMenuItem>
            <DropdownMenuItem>Hard</DropdownMenuItem>
            <DropdownMenuItem>Any</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <Button>Start Quiz</Button>
      </CardFooter>
    </Card>
  );
};

export default InputBox;
