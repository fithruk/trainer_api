import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirdth: {
    type: Date,
    validate: {
      validator: function (value: Date) {
        return value <= new Date();
      },
      message: "Date of birth cannot be in the future",
    },
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
});

export default model("traineruser", userSchema);
