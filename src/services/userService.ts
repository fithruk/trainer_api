import userModel from "../models/userModel";
import { IUser } from "../types/userType";
import tokenService from "./tokenService";

interface IUserService {
  findOrCreateUser: (name: string, email: string) => Promise<IUser>;
}

class UserService implements IUserService {
  findOrCreateUser = async (name: string, email: string) => {
    const candidate = await userModel.findOne({ email });

    if (candidate) {
      return candidate;
    }

    const newUser: IUser = await userModel.create({ name, email });
    return newUser;
  };

  login = async (user: IUser) => {
    const token = tokenService.generateToken({
      name: user.name,
      email: user.email,
    });
    return { user, token };
  };
}

export default new UserService();
