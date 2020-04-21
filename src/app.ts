import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import * as bodyParser from "body-parser";
import { api } from "./routes/api";
import { getData } from "./tools/ScrapeTeamStats";

export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", api);
