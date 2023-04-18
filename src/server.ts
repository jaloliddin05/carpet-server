import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import * as fileUpload from "express-fileupload";
import {
  CategoryRouter,
  ProductRouter,
  ContactRouter,
  OrderRouter,
  RequestRouter,
  UserRouter,
} from "./routes";

const app: express.Application = express();

app.use(fileUpload());
app.use(express.json());
app.use(
  CategoryRouter,
  ProductRouter,
  ContactRouter,
  OrderRouter,
  RequestRouter,
  UserRouter
);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
