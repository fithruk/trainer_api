export type ShapeRingValuesType = {
  weight: number;
  waist: number;
  leftHip: number;
  rightHip: number;
  chest: number;
  neck: number;
  leftBiceps: number;
  rightBiceps: number;
  leftCalve: number;
  rightCalve: number;
};

export interface IBodyShape {
  email: string;
  date: Date;
  shapeRingsValues: ShapeRingValuesType[];
}
