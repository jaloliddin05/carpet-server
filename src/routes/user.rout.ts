import { Router } from "express";
import * as userController from "../modules/user/user.controller";

const router = Router();

router
  .get("/user", userController.getAll)
  .get("/user/:id", userController.getById)
  .post("/user", userController.create)
  .put("/user/:id", userController.update)
  .delete("/user/:id", userController.remove);

export default router;
