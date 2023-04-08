import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
import { CategoryRouter, ProductRouter } from "./routes";

const app: express.Application = express();

app.use(express.json());
app.use(CategoryRouter, ProductRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
