import {Request, Response, NextFunction} from "express";
import {check, validationResult} from "express-validator";

export const validateRegister = [
  check('username').isString()
    .withMessage('Username must be string.')
    .matches(/^[A-Za-z0-9\s]+$/)
    .withMessage('Username must be alphanumeric.'),
  check('email').normalizeEmail().isEmail(),
  check('password').isLength({min: 6}),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send({errors: errors.array()});
    }

    next();
  }
];

export const validateLogin = [
  check('email').isString(),
  check('password').isLength({min: 6}),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send({errors: errors.array()});
    }

    next();
  }
];