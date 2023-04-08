import { Router } from "express";
import * as orderController from "../modules/order/order.controller";
import { DtoValidationMiddleware } from "../infra/validation";
import { CreateOrderDto, UpdateOrderDto } from "../modules/order/dto";
const router = Router();

router
  .get("/order", orderController.getAll)
  .get("/order/:id", orderController.getById)
  .post(
    "/order",
    DtoValidationMiddleware(CreateOrderDto),
    orderController.create
  )
  .put(
    "/order/:id",
    DtoValidationMiddleware(UpdateOrderDto, true),
    orderController.update
  )
  .delete("/order/:id", orderController.remove);

export default router;
