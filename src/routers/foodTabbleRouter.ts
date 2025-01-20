import { Router } from "express";
import foodTableController from "../controllers/foodTableController";
import { authMidlleware } from "../midllewares/authMidllware";
const router = Router();

router.get("/getAllFood", authMidlleware, foodTableController.getAllFoods);
router.get(
  "/getlFoodById/:id",
  authMidlleware,
  foodTableController.getFoodById
);
router.post(
  "/saveUserFoodPlan",
  authMidlleware,
  foodTableController.saveUserFoodPlan
);
//router.post("/loginWithGoogle", authController.loginWithGoogle);

export default router;
