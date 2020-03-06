import * as express from "express";
import { conference } from "./Conference";
import { recruit } from "./Recruits";
import { team } from "./Team";

export const api = express.Router();

api.use("/conference", conference);
api.use("/recruit", recruit);
api.use("/team", team);
