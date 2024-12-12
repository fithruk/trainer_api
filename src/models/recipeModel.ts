import { Schema, model } from "mongoose";

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  paragraphs: [String],
  tableData: {
    calories: {
      type: String,
      required: true,
    },
    proteins: {
      type: String,
      required: true,
    },
    carbs: {
      type: String,
      required: true,
    },
    fats: {
      type: String,
      required: true,
    },
    fiber: {
      type: String,
      required: true,
      default: null,
    },
  },
  imgUrls: [String],
  category: {
    type: String,
    required: true,
  },
  ingredients: {
    type: Map,
    of: [String],
  },
});

export default model("recipe", recipeSchema);
