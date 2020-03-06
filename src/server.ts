import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import * as bodyParser from "body-parser";
import { api } from "./routes/api";

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", api);

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
