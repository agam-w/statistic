import express, {Application, Request, Response} from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from"compression";
import helmet from "helmet";
import cors from "cors";
import {config as dotenv} from "dotenv";

// Routers
import AuthRoutes from "./routers/AuthRoutes";
import PerformanceRoutes from "./routers/PerformanceRoutes";

class App {
  public app: Application;
  
  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors({credentials: true}));
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("API ready!");
    });

    this.app.use("/api/v1/auth", AuthRoutes);
    this.app.use("/api/v1/performance", PerformanceRoutes);
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
});