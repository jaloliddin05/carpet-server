import { Router } from "express";
import * as contactController from "../modules/contact/contact.controller";

const router = Router();

router
  .get("/contact", contactController.getAll)
  .get("/contact/:id", contactController.getById)
  .post("/contact", contactController.create)
  .put("/contact/:id", contactController.update)
  .delete("/contact/:id", contactController.remove);

export default router;
