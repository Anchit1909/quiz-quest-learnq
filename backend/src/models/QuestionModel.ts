import mongoose, { Document, Schema } from "mongoose";

interface IQuestion extends Document {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: number;
  marksAllocated: number;
  difficultyLevel: string;
}

const questionSchema: Schema = new Schema({
  question: { type: String, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String, required: true },
  option4: { type: String, required: true },
  correctOption: { type: Number, required: true },
  marksAllocated: { type: Number, required: true },
  difficultyLevel: { type: String, required: true },
});

const QuestionModel = mongoose.model<IQuestion>("Question", questionSchema);
export default QuestionModel;
