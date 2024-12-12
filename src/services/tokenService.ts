import jwt from "jsonwebtoken";
import tokenModel from "../models/tokenModel";
import { IUser } from "../types/userType";

type PayloadType = {
  name: string;
  email: string;
};

class TokenService {
  generateToken = (payload: PayloadType) => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const expiresInSeconds = Math.floor(
      (endOfDay.getTime() - now.getTime()) / 1000
    );

    const refreshToken = jwt.sign(payload, process.env.JWT_ACCES_REFRESH!, {
      expiresIn: expiresInSeconds + "s",
    });

    return refreshToken;
  };

  saveToken = async (user: IUser, token: string) => {
    const tokenData = await tokenModel.findOne({ userId: user._id });
    if (tokenData) {
      tokenData.refreshToken = token;
      return await tokenData.save();
    }

    await tokenModel.create({ userId: user._id, refreshToken: token });
  };

  checkToken = async (token: string) => {
    return jwt.verify(token, process.env.JWT_ACCES_REFRESH!);
  };
}

export default new TokenService();
