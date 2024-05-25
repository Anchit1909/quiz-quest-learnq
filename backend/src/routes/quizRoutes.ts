import * as dotenv from "dotenv";
import * as express from "express";
import * as quiz from "../controllers/quizController";

dotenv.config();

const router = express.Router();
router.get("/questions/", quiz.getQuestions);
router.post("/submit-answers", quiz.submitAnswers);

export { router };
