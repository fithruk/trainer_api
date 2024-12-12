import { IUser } from "../types/userType";

class UserDto {
  name: string;
  email: string;
  token: string;
  constructor(user: IUser, token: string) {
    this.name = user.name;
    this.email = user.email;
    this.token = token;
  }
}

export { UserDto };
