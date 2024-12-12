import { Request, Response, NextFunction } from "express";
import tokenService from "../services/tokenService";
import ApiError from "../exeptions/apiError";

const authMidlleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return next(ApiError.UnauthorizedError());
    }
    const userData = await tokenService.checkToken(token as string);
    if (!userData) {
      return next(ApiError.UnauthorizedError());
    }
    next();
  } catch (error) {
    next(ApiError.UnauthorizedError());
  }
};

export { authMidlleware };
