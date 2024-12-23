import { Schema, model } from "mongoose";

const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "traineruser",
  },
  refreshToken: {
    type: String,
    required: true,
  },
});

export default model("refreshToken", tokenSchema);
