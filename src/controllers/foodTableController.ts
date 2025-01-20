import { Request, Response, NextFunction } from "express";
import foodService from "../services/foodService";
import { UserFoodPlanType } from "../types/foodTypes";

class FoodTableController {
  getAllFoods = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allFoods = await foodService.getAllFoods();
      res.status(200).json(allFoods);
    } catch (error) {
      next(error);
    }
  };

  getFoodById = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log(id + "_id");

    try {
      const recipe = await foodService.getFoodById(id);
      res.status(200).json(recipe);
    } catch (error) {
      next(error);
    }
  };

  saveUserFoodPlan = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        email,
        userFoodPlan,
      }: { email: string; userFoodPlan: UserFoodPlanType } = req.body;
      const foodPlan = await foodService.saveUserFoodPlan(email, userFoodPlan);
      if (foodPlan) {
        return res.status(200).json();
      }
    } catch (error) {
      next(error);
    }
  };
}

export default new FoodTableController();
