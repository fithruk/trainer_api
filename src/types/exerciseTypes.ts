export type ExerciseShortType = {
  id: string;
  exerciseName: string;
  exerciseMuscleGroup: string;
  equipment: string;
  difficulty: string;
  imageUrl: string;
  titleUa: string;
};

export type ExerciceFullType = ExerciseShortType & {
  exerciseSteps: ExerciseStepType[];
};

export type ExerciseStepType = {
  id: string;
  exersiceId: string;
  phaseKey: number;
  phaseName: string;
  instructions: ExerciseStepInstructions[];
};

export type ExerciseStepInstructions = {
  id: string;
  exerciseStepId: string;
  instructions: string[];
};
