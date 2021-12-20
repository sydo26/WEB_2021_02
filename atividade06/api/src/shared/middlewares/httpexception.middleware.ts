import { NextFunction, Request, Response } from "express";

export default (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("ERROR: ", err);

  next(err);
};
