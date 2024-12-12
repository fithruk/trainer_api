import { Router } from "express";
import bodyShapeComtroller from "../controllers/bodyShapeController";
import { authMidlleware } from "../midllewares/authMidllware";
const router = Router();

router.get(
  "/getCurrentBodyShapeValuesByEmail/:email",
  authMidlleware,
  bodyShapeComtroller.getBodyShapeValuesByEmail
);
// router.get(
//   "/getlFoodById/:id",
//   authMidlleware,
//   foodTableController.getFoodById
//);
//router.post("/loginWithGoogle", authController.loginWithGoogle);

export default router;
