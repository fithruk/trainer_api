import { Request, Response, NextFunction } from "express";
import recipeModel from "../models/recipeModel";
import { IRecipe } from "../types/foodTypes";

interface IFoodService {
  getAllFoods: () => Promise<IRecipe[]>;
  getFoodById: (id: string) => Promise<IRecipe>;
}

class FoodService implements IFoodService {
  getAllFoods = async () => {
    const allFoods = await recipeModel.find().lean();
    return allFoods as unknown as IRecipe[];
  };

  getFoodById = async (id: string) => {
    const recipe = await recipeModel.findById(id).lean();
    return recipe as unknown as IRecipe;
  };
}

export default new FoodService();
