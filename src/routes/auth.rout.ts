import { Router } from "express";
import * as authController from "../modules/auth/auth.controller";
import { DtoValidationMiddleware } from "../infra/validation";
import { LoginDto } from "../modules/auth/dto";
const router = Router();

router
  .post("/auth/login", DtoValidationMiddleware(LoginDto), authController.Login)
  .post("/auth/refresh", authController.Refresh)
  .post("/auth/logout", authController.Logout);

export default router;
