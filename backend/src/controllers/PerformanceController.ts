import {Request, Response} from "express";
import Authentication from '../utils/Authentication';
const db = require("../db/models");

class PerformanceController {
  index = async (req: Request, res: Response): Promise<Response> => {
    const performances = await db.performance.findAll();
    return res.send(performances);
  }
}

export default new PerformanceController();