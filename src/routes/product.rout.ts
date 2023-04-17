import { Router } from "express";
import * as productController from "../modules/product/product.controller";
import {
  DtoValidationMiddleware,
  ProductQueryParserMiddleware,
} from "../infra/validation";
import { CreateProductDto, UpdateProductDto } from "../modules/product/dto";
const router = Router();


router
  .get("/product", ProductQueryParserMiddleware, productController.getAll)
  .get("/product/:id", productController.getById)
  .post(
    "/product",
    DtoValidationMiddleware(CreateProductDto),
    productController.create
  )
  .put(
    "/product/:id",
    DtoValidationMiddleware(UpdateProductDto, true),
    productController.update
  )
  .delete("/product/:id", productController.remove);

export default router;
