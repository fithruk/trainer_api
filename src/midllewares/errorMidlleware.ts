import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import ApiError from "../exeptions/apiError";
import BodyShapeValueError from "../exeptions/bodyShapeValueError";
import { log } from "console";

const errorMidlleware: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof ApiError) {
    console.log(err);
    res.status(err.status).json({ message: err.message, errors: err.errors });
    return;
  }
  if (err instanceof BodyShapeValueError) {
    console.log(err);
    res.status(err.status).json({ message: err.message, errors: err.errors });
    return;
  }
  console.log(err.message);

  res.status(500).json({ message: "Unenpected error" });
  return;
};

export { errorMidlleware };
