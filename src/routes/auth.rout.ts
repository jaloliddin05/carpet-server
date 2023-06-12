import { Router } from "express";
import * as authController from "../modules/auth/auth.controller";
import { DtoValidationMiddleware } from "../infra/validation";
import { LoginDto } from "../modules/auth/dto";
import {
  LoginMiddleware,
  RefreshTokenMiddleware,
} from "../modules/auth/middleware";
const router = Router();

router
  .post(
    "/auth/login",
    DtoValidationMiddleware(LoginDto),
    LoginMiddleware,
    authController.Login
  )
  .post("/auth/refresh", RefreshTokenMiddleware, authController.Refresh)
  .post("/auth/logout", authController.Logout);

export default router;
