import { Router } from "express";
import exerciseController from "../controllers/exerciseController";

const router = Router();

router.get("/getAllExercises", exerciseController.getAllExercises);
router.post("/getExerciseByName", exerciseController.getExerciseByName);
router.post(
  "/getExerciseMuscleGroupe",
  exerciseController.getExerciseMuscleGroupe
);
router.post(
  "/getExercisesByEquipment",
  exerciseController.getExerisesByEquipment
);
router.post(
  "/getExercisesByDifficulty",
  exerciseController.getExercisesByDifficulty
);

export default router;
