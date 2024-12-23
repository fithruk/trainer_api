import { Router } from "express";
import authController from "../controllers/authController";
const router = Router();

router.post("/isRegistrationComplited", authController.isRegistrationComplited);
router.post("/finishRegistration", authController.finishRegistration);
router.post("/loginWithGoogle", authController.loginWithGoogle);

export default router;
