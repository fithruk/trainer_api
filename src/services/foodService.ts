import { Request, Response, NextFunction } from "express";
import recipeModel from "../models/recipeModel";
import userFoodMenuModel from "../models/userFoodMenuModel";
import { IRecipe, UserFoodPlanType } from "../types/foodTypes";

interface IFoodService {
  getAllFoods: () => Promise<IRecipe[]>;
  getFoodById: (id: string) => Promise<IRecipe>;
  saveUserFoodPlan: (
    email: string,
    userFoodPlan: UserFoodPlanType
  ) => Promise<UserFoodPlanType>;
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

  saveUserFoodPlan = async (email: string, userFoodPlan: UserFoodPlanType) => {
    const foodPlan = await userFoodMenuModel.findOne({ email });

    if (foodPlan) {
      foodPlan.overwrite({ email, ...userFoodPlan });
      await foodPlan.save();
      return foodPlan;
    }
    const newFoodPlan = await userFoodMenuModel.create({
      email,
      ...userFoodPlan,
    });
    await newFoodPlan.save();

    return newFoodPlan;
  };
}

export default new FoodService();
