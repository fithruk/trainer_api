import ApiError from "../exeptions/apiError";
import userModel from "../models/userModel";
import { FinishRegistrationData } from "../types/finishRegistrationTypes";
import { IUser } from "../types/userType";
import tokenService from "./tokenService";

interface IUserService {
  findOrCreateUser: (name: string, email: string) => Promise<IUser>;
  findValidUser: (email: string) => Promise<IUser>;
  finishRegistration: ({ postData, email }: FinishRegistrationData) => void;
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

  findValidUser = async (email: string) => {
    const candidate = await userModel.findOne({ email });

    if (!candidate) {
      throw ApiError.BadRequest("User does noy exist");
    }
    return candidate;
  };

  finishRegistration = async ({ postData, email }: FinishRegistrationData) => {
    const [gender, dateOfBirdth] = postData;
    const user = await this.findValidUser(email);
    user.gender = gender[1] as "Male" | "Female";
    user.dateOfBirdth = new Date(dateOfBirdth[1] as string);
    await user.save();
  };
}

export default new UserService();
