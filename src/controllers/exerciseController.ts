import { Request, Response, NextFunction } from "express";
import exercisesService from "../services/exercisesService";

class ExercisesController {
  public getAllExercises = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const exersices = await exercisesService.getAllExercises();

      res.status(200).json(exersices);
    } catch (error) {
      next(error);
    }
  };

  public getExerciseByName = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { exerciseName } = req.body;

      const exersice = await exercisesService.getExerciseByName(exerciseName);

      res.status(200).json(exersice);
    } catch (error) {
      next(error);
    }
  };

  public getExerisesByEquipment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { equipment } = req.body;

      const exersices = await exercisesService.getExerisesByEquipment(
        equipment
      );

      res.status(200).json(exersices);
    } catch (error) {
      next(error);
    }
  };

  public getExercisesByDifficulty = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { difficulty } = req.body;

      const exersices = await exercisesService.getExercisesByDifficulty(
        difficulty
      );

      res.status(200).json(exersices);
    } catch (error) {
      next(error);
    }
  };

  public getExerciseMuscleGroupe = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { exerciseMuscleGroupe } = req.body;

      const exersices = await exercisesService.getExercisesByMuscleGroupe(
        exerciseMuscleGroupe
      );

      res.status(200).json(exersices);
    } catch (error) {
      next(error);
    }
  };
}

export default new ExercisesController();
