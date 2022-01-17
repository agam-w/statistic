import BaseRoutes from './BaseRouter';
import { auth } from '../middlewares/AuthMiddleware';

// Controllers
import PerformanceController from "../controllers/PerformanceController";

class PerformanceRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get("/", auth, PerformanceController.index);
  }
}

export default new PerformanceRoutes().router;