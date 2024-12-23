import { Request, Response, NextFunction } from "express";
import userService from "../services/userService";
import { IUser } from "../types/userType";
import { UserDto } from "../dto/userdto";
import tokenService from "../services/tokenService";
import { FinishRegistrationData } from "../types/finishRegistrationTypes";
import ApiError from "../exeptions/apiError";

class AuthController {
  isRegistrationComplited = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const body = req.body as { email?: string };

      if (!body.email) {
        throw ApiError.BadRequest("Email is required");
      }

      const { dateOfBirdth, gender } = await userService.findValidUser(
        body.email
      );

      if (!dateOfBirdth || !gender) {
        throw ApiError.BadRequest("Bad request");
      }
      res.status(200).send();
    } catch (error) {
      next(error);
    }
  };

  finishRegistration = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { postData, email }: FinishRegistrationData = req.body;
      await userService.finishRegistration({ postData, email });
      res.status(200).send();
    } catch (error) {
      next(error);
    }
  };

  loginWithGoogle = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email } = req.body;
      const candidate: IUser = await userService.findOrCreateUser(name, email);
      const authData = await userService.login(candidate);
      const usedto = new UserDto(authData.user, authData.token);
      await tokenService.saveToken(authData.user, authData.token);
      res.json({ usedto });
    } catch (error) {
      next(error);
    }
  };
}

export default new AuthController();
