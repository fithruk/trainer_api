import { Request, Response, NextFunction } from "express";
import foodService from "../services/foodService";
import { UserFoodPlanType } from "../types/foodTypes";
import ApiError from "../exeptions/apiError";

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
        res.status(200).json();
        return;
      }
      next(ApiError.UnauthorizedError());
    } catch (error) {
      next(error);
    }
  };

  getUserFoodPlan = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.params;
    try {
      const foodPlan = await foodService.getUserFoodPlan(email);
      if (!foodPlan) {
        next(ApiError.BadRequest("Food plan does not exist."));
        return;
      }
      res.status(200).json(foodPlan);
    } catch (error) {
      next(error);
    }
  };
}

export default new FoodTableController();
