import { IUser } from "../types/userType";
import userService from "../services/userService";
import { Request, Response, NextFunction } from "express";
import ApiError from "../exeptions/apiError";

interface IUserController {
  getUserByEmail: (req: Request, res: Response, next: NextFunction) => void;
}

class UserController implements IUserController {
  getUserByEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.query;
    try {
      const candidate = await userService.findValidUser(email as string);

      if (!candidate) {
        return next(ApiError.BadRequest("User does not exist"));
      }

      res.status(200).json(candidate);
    } catch (error) {
      next(error);
    }
  };
}

export default new UserController();
