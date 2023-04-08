import { Router } from "express";
import * as requestController from "../modules/request/request.controller";
import { DtoValidationMiddleware } from "../infra/validation";
import { CreateRequestDto, UpdateRequestDto } from "../modules/request/dto";
const router = Router();

router
  .get("/request", requestController.getAll)
  .get("/request/:id", requestController.getById)
  .post(
    "/request",
    DtoValidationMiddleware(CreateRequestDto),
    requestController.create
  )
  .put(
    "/request/:id",
    DtoValidationMiddleware(UpdateRequestDto, true),
    requestController.update
  )
  .delete("/request/:id", requestController.remove);

export default router;
