import * as express from "express";
import { conference } from "./Conference";
import { recruit } from "./Recruits";
import { team } from "./Team";
import { games } from "./Games";
import SchoolsFBS from "../models/Team";
import TeamFunctions from "../Teams/TeamData";

export const api = express.Router();

api.use("/conference", conference);
api.use("/recruit", recruit);
api.use("/team", team);
api.use("/games", games);

api.get("/preload", async (req, res) => {
  SchoolsFBS.findAll({
    attributes: [
      "id",
      "school",
      "mascot",
      "abbreviation",
      "conference",
      "division",
      "color",
      "alt_color",
      "logos_1",
      "logos_2",
    ],
    order: [["conference", "ASC"]],
  })
    .then((data: any) => {
      let resultArr = [];
      data.forEach((el) => {
        resultArr.push(el.dataValues);
      });
      console.log(data);
      let conferenceGroups = TeamFunctions.groupByConference(resultArr);
      let teamsObject = TeamFunctions.buildTeamsObject(resultArr);
      let answerData = {
        conferences: conferenceGroups,
        teams: teamsObject,
      };
      res.send(answerData);
    })
    .catch((err) => {
      console.log(err);
    });
});
