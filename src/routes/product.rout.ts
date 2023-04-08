import { Router } from "express";
import * as productController from "../modules/product/product.controller";

const router = Router();

router
  .get("/product", productController.getAll)
  .get("/product/:id", productController.getById)
  .post("/product", productController.create)
  .put("/product/:id", productController.update)
  .delete("/product/:id", productController.remove);

export default router;
