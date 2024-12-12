import { IBodyShape, ShapeRingValuesType } from "../types/bodyShapeTypes";

class BodyShapedto {
  public email: string;
  public date: Date;
  public shapeRingsValues: ShapeRingValuesType;
  constructor(bodyShapeData: IBodyShape) {
    this.date = bodyShapeData.date;
    this.email = bodyShapeData.email;
    this.shapeRingsValues = bodyShapeData.shapeRingsValues[0];
  }
}

export default BodyShapedto;
