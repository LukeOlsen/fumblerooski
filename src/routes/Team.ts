import { Router } from "express";
import SchoolsFBS from "../models/Team";

export const team = Router();

team.get("/", (req, res) => {
  SchoolsFBS.findAll().then(teams => {
    res.send(teams);
  });
});

team.get("/:team", async (req, res, next) => {
  SchoolsFBS.findAll({
    where: {
      school: req.params.team
    }
  }).then(team => {
    res.send(team);
  });
});

// var express = require("express");
// var teamData = express.Router();
// var teamQ = require("./TeamQueries");

// teamData.get("/:team", async (req, res) => {
//   let teamData = await teamQ(req.params.team);
//   res.json(teamData);
// });
