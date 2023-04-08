import { Router } from "express";
import * as categoryController from "../modules/category/category.controller";
import { DtoValidationMiddleware } from "../infra/validation";
import { CreateCategoryDto, UpdateCategoryDto } from "../modules/category/dto";
const router = Router();

router
  .get("/category", categoryController.getAll)
  .get("/category/:id", categoryController.getById)
  .post(
    "/category",
    DtoValidationMiddleware(CreateCategoryDto),
    categoryController.create
  )
  .put(
    "/category/:id",
    DtoValidationMiddleware(UpdateCategoryDto, true),
    categoryController.update
  )
  .delete("/category/:id", categoryController.remove);

export default router;
