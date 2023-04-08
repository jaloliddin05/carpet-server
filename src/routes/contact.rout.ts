import { Router } from "express";
import * as contactController from "../modules/contact/contact.controller";
import { DtoValidationMiddleware } from "../infra/validation";
import { CreateContactDto, UpdateContactDto } from "../modules/contact/dto";
const router = Router();

router
  .get("/contact", contactController.getAll)
  .get("/contact/:id", contactController.getById)
  .post(
    "/contact",
    DtoValidationMiddleware(CreateContactDto),
    contactController.create
  )
  .put(
    "/contact/:id",
    DtoValidationMiddleware(UpdateContactDto, true),
    contactController.update
  )
  .delete("/contact/:id", contactController.remove);

export default router;
