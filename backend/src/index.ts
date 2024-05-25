import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const app: Express = express();
mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("Database is connected"))
  .catch((error) => {
    console.error(error);
  });

app.use(cors());
const port = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => { 
  res.send("Express + TypeScript Server");
  console.log("hey");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
