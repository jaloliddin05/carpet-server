import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";

const app: express.Application = express();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
