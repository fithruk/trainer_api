import { Schema, model } from "mongoose";

const foodCategory = new Schema({
  name: { type: String, required: true },
  grams: { type: Number, required: true },
  calories: { type: Number, required: true },
});

const userFoodMenuSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    fats: [foodCategory],
    vegetables: [foodCategory],
    proteins: [foodCategory],
    carbohydrates: [foodCategory],
  },
  { timestamps: true }
);

export default model("userFoodMenu", userFoodMenuSchema);
