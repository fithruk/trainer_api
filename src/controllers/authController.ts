import { Request, Response, NextFunction } from "express";
import userService from "../services/userService";
import { IUser } from "../types/userType";
import { UserDto } from "../dto/userdto";
import tokenService from "../services/tokenService";

class AuthController {
  loginWithCredentials = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    res.json("jopa");
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
      console.log(error);
    }
  };
}

export default new AuthController();
