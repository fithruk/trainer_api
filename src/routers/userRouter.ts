import { Router } from "express";
import userController from "../controllers/userController";
import { authMidlleware } from "../midllewares/authMidllware";
const router = Router();

router.get(
  "/getUserByEmail/:email",
  authMidlleware,
  userController.getUserByEmail
);
// router.get(
//   "/getUserByEmail/:email",
//   authMidlleware,
//   foodTableController.getFoodById
// );
//router.post("/loginWithGoogle", authController.loginWithGoogle);

export default router;
