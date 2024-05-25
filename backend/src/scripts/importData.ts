import * as fs from "fs";
import csv from "csv-parser";
import mongoose from "mongoose";
import QuestionModel from "../models/QuestionModel";
import dotenv from "dotenv";

interface CSVRow {
  [key: string]: string;
}

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: number;
  marksAllocated: number;
  difficultyLevel: string;
}

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "");
    console.log("Database is connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

const importData = async () => {
  await connectDB();

  const filePath =
    "/home/anchit1909/VS Code Files/Assignments/learnq-quiz-app/backend/src/data/sample_data.csv";

  const questions: Question[] = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data: CSVRow) => {
      questions.push({
        question: data["Question"],
        option1: data["Option 1"],
        option2: data["Option 2"],
        option3: data["Option 3"],
        option4: data["Option 4"],
        correctOption: parseInt(data["Correct Option"]),
        marksAllocated: parseInt(data["Marks allocated"]),
        difficultyLevel: data["Difficulty Level"],
      });
    })
    .on("end", async () => {
      try {
        await QuestionModel.insertMany(questions);
        console.log("Data imported successfully");
        process.exit(0);
      } catch (error) {
        console.error("Error importing data:", error);
        process.exit(1);
      }
    });
};

importData();
