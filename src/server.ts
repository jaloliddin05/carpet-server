import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import * as fileUpload from "express-fileupload";
import * as cors from "cors";
import {
  AuthRouter,
  CategoryRouter,
  ContactRouter,
  OrderRouter,
  ProductRouter,
  RequestRouter,
  UserRouter,
} from "./routes";
import { AccessTokenMiddleware } from "./modules/auth/middleware";

const app: express.Application = express();

app.use(fileUpload());
app.use(cors());
app.use(express.json());
app.use(AccessTokenMiddleware);
app.use(
  AuthRouter,
  CategoryRouter,
  ContactRouter,
  OrderRouter,
  ProductRouter,
  RequestRouter,
  UserRouter
);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
