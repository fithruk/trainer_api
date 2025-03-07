import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import authRouter from "./routers/authRouter";
import foodRouter from "./routers/foodTabbleRouter";
import userRouter from "./routers/userRouter";
import exercisesRouter from "./routers/exercisesRoute";
import bodyShapeRouter from "./routers/bodyShapeRouter";
import mongoose from "mongoose";
import { errorMidlleware } from "./midllewares/errorMidlleware";
const app = express();
const port = 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,

    methods: ["GET", "POST"],
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/foods", foodRouter);
app.use("/bodyShape", bodyShapeRouter);
app.use("/users", userRouter);
app.use("/exercises", exercisesRouter);
app.use(errorMidlleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB!);

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
