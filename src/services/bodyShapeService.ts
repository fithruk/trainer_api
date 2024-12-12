import bodyShapeVolumeSchema from "../models/shapeVolumesModel";
//import { Document } from "mongoose";
import { IBodyShape } from "../types/bodyShapeTypes";

interface IBodyShapeService {
  getDataAboutAllChangesByUserEmail: (email: string) => Promise<IBodyShape[]>;
}

class BodyShapeService implements IBodyShapeService {
  getDataAboutAllChangesByUserEmail = async (email: string) => {
    const dataAboutAllChangesByUserEmail = await bodyShapeVolumeSchema
      .find({
        email,
      })
      .sort({ date: -1 })
      .lean<IBodyShape[]>();

    return dataAboutAllChangesByUserEmail;
  };
}

export default new BodyShapeService();
