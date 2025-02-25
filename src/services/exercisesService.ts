import ApiError from "../exeptions/apiError";
import { ExerciseShortType } from "../types/exerciseTypes";
import ApiService from "./apiService";

class ExercisesService {
  private readonly exerciseApiURI: string = process.env.EXERCISES_API_URI!;
  private exerciseApi: ApiService = new ApiService(this.exerciseApiURI);

  public getAllExercises = async () => {
    let { data, status } = await this.exerciseApi.get<ExerciseShortType[]>(
      "/api/Exercises"
    );
    if (status === 200) {
      data = data.map((ex) => {
        return { ...ex, exerciseName: ex.exerciseName.replace("\\b", "") };
      });
      return data;
    }

    throw ApiError.UnauthorizedError();
  };

  public getExerciseByName = async (exerciseName: string) => {
    const { data, status } = await this.exerciseApi.post<ExerciseShortType>(
      "/api/Exercises/getExerciseByName",
      { exerciseName }
    );
    if (status === 200) return data;

    throw ApiError.UnauthorizedError();
  };

  public getExerisesByEquipment = async (equipment: string) => {
    const { data, status } = await this.exerciseApi.post<ExerciseShortType[]>(
      "/api/Exercises/getExercisesByEquipment",
      { exerciseEquipment: equipment }
    );
    if (status === 200) return data;

    throw ApiError.UnauthorizedError();
  };

  public getExercisesByDifficulty = async (difficulty: string) => {
    const { data, status } = await this.exerciseApi.post<ExerciseShortType[]>(
      "/api/Exercises/getExercisesByDifficulty",
      { exerciseDifficulty: difficulty }
    );
    if (status === 200) return data;

    throw ApiError.UnauthorizedError();
  };

  public getExercisesByMuscleGroupe = async (exerciseMuscleGroupe: string) => {
    const { data, status } = await this.exerciseApi.post<ExerciseShortType[]>(
      "/api/Exercises/getExercisesByMuscleGroupe",
      { exerciseMuscleGroupe: exerciseMuscleGroupe }
    );
    if (status === 200) return data;

    throw ApiError.UnauthorizedError();
  };
}

export default new ExercisesService();
