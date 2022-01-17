import BaseRoutes from './BaseRouter';
import {validateRegister, validateLogin} from '../middlewares/AuthValidator';
import { auth } from '../middlewares/AuthMiddleware';

// Controllers
import AuthController from "../controllers/AuthController";

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", validateRegister,  AuthController.register);
    this.router.post("/login", validateLogin, AuthController.login);
    this.router.get("/profile", auth, AuthController.profile);
  }
}

export default new AuthRoutes().router;