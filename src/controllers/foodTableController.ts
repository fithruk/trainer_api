import recipeModel from "../models/recipeModel";
import { Request, Response, NextFunction } from "express";

class FoodTableController {
  getAllFoods = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allFoods = await recipeModel.find();
      res.status(200).json(allFoods);
    } catch (error) {
      console.log(error);
    }
  };

  getFoodById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log(id + "_id");

    try {
      const recipe = await recipeModel.findById(id);
      res.status(200).json(recipe);
    } catch (error) {
      console.log(error);
    }
  };
}

export default new FoodTableController();
