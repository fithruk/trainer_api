import { Document } from "mongoose";

export interface IRecipe extends Document {
  title: string;
  paragraphs: string[];
  tableData: {
    calories: string;
    proteins: string;
    carbs: string;
    fats: string;
    fiber: string | null;
  };
  imgUrls: string[];
  category: string;
  ingredients: Map<string, string[]>;
}

export type UserFoodPlanType = Document &
  Partial<
    Record<
      "fats" | "vegetables" | "proteins" | "carbohydrates",
      | {
          name: string;
          grams: number;
          calories: number;
        }[]
      | undefined
    >
  >;
