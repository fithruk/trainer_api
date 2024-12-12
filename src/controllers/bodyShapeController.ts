import { Request, Response, NextFunction } from "express";
import bodyShapeService from "../services/bodyShapeService";
import BodyShapeValueError from "../exeptions/bodyShapeValueError";
import BodyShapedto from "../dto/bodyShapedto";

class BodyShapeController {
  getBodyShapeValuesByEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { email } = req.params;

    try {
      const dataAboutAllChangesByUserEmail =
        await bodyShapeService.getDataAboutAllChangesByUserEmail(email);

      if (dataAboutAllChangesByUserEmail.length === 0) {
        throw BodyShapeValueError.noDataAvailableError();
      }
      const bodyShapeDto = new BodyShapedto(dataAboutAllChangesByUserEmail[0]);

      res.status(200).json(bodyShapeDto);
    } catch (error) {
      next(error);
    }
  };
}

export default new BodyShapeController();
