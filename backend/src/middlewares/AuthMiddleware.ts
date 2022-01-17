import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction): any => {
  if (!req.headers.authorization) {
    return res.status(401).send("You are not authenticated!");
  }

  let secretKey = process.env.JWT_SECRET_KEY || "secret";
  const token: string = req.headers.authorization.split(" ")[1];

  try {
    const credentials: string | object = jwt.verify(token, secretKey);

    if (credentials) {
      req.app.locals.credentials = credentials;
      next()
      return;
    }

    return res.status(400).send("Invalid token!");
  } catch (error) {
    return res.status(400).send(error);
  }
}