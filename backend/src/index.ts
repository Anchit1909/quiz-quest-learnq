import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import * as quizRoutes from "./routes/quizRoutes";

dotenv.config();

const app: Express = express();
mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("Database is connected"))
  .catch((error) => {
    console.error(error);
  });

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/quiz", quizRoutes.router);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
