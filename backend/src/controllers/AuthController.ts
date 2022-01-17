import {Request, Response} from "express";
import Authentication from '../utils/Authentication';
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let {username, email, password} = req.body;
    const hashedPassword: string = await Authentication.passwordHash(password)

    await db.user.create({username,email,password: hashedPassword});

    return res.status(201).json("Register Success");
  }

  login = async (req: Request, res: Response): Promise<Response> => {
    let {email, password} = req.body;
    var criteria = (email.indexOf('@') === -1) ? {username: email} : {email};

    const user = await db.user.findOne({
      where: criteria
    });

    if (!user) {
      return res.status(400).json("User not found!");
    }

    let compare = await Authentication.passwordCompare(password, user.password);
    if (compare) {
      let token = Authentication.generateToken(user.id, user.username, user.email, user.password);
      let data = {token, userInfo: user};
      return res.json(data);
    }

    return res.status(400).json("Wrong password!");
  }

  profile = async (req: Request, res: Response): Promise<Response> => {
    return res.json(req.app.locals.credentials);
  }
}

export default new AuthController();