import { Document, Types } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string | null;
  _id: Types.ObjectId;
}
