import { Router } from "express";
import * as userController from "../modules/user/user.controller";
import { DtoValidationMiddleware } from "../infra/validation";
import { CreateUserDto, UpdateUserDto } from "../modules/user/dto";
const router = Router();

router
  .get("/user", userController.getAll)
  .get("/user/:id", userController.getById)
  .post("/user", DtoValidationMiddleware(CreateUserDto), userController.create)
  .put(
    "/user/:id",
    DtoValidationMiddleware(UpdateUserDto, true),
    userController.update
  )
  .delete("/user/:id", userController.remove);

export default router;
