import { Request, Response, NextFunction } from "express";
import foodService from "../services/foodService";

class FoodTableController {
  getAllFoods = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allFoods = await foodService.getAllFoods();
      res.status(200).json(allFoods);
    } catch (error) {
      console.log(error);
    }
  };

  getFoodById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log(id + "_id");

    try {
      const recipe = await foodService.getFoodById(id);
      res.status(200).json(recipe);
    } catch (error) {
      console.log(error);
    }
  };

  saveUserFoodPlan = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.send();
  };
}

export default new FoodTableController();
