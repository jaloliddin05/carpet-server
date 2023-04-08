import { Router } from "express";
import * as requestController from "../modules/request/request.controller";

const router = Router();

router
  .get("/request", requestController.getAll)
  .get("/request/:id", requestController.getById)
  .post("/request", requestController.create)
  .put("/request/:id", requestController.update)
  .delete("/request/:id", requestController.remove);

export default router;
