import { Router } from "express";
import * as orderController from "../modules/order/order.controller";

const router = Router();

router
  .get("/order", orderController.getAll)
  .get("/order/:id", orderController.getById)
  .post("/order", orderController.create)
  .put("/order/:id", orderController.update)
  .delete("/order/:id", orderController.remove);

export default router;
