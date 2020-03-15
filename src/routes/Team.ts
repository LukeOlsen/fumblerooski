import { Router } from "express";
import SchoolsFBS from "../models/Team";
import Recruits from "../models/Recruits";
import Talents from "../models/Talents";

export const team = Router();

team.get("/", (req, res) => {
  SchoolsFBS.findAll().then(teams => {
    res.send(teams);
  });
});

team.get("/:team", async (req, res, next) => {
  const schoolData = SchoolsFBS.findAll({
    where: {
      school: req.params.team
    }
  });

  const recruitData = Recruits.findAll({
    where: {
      committedTo: req.params.team,
      year: 2019
    }
  });

  const talentData = Talents.findAll({
    where: {
      school: req.params.team
    }
  });

  Promise.all([schoolData, recruitData, talentData])
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// var express = require("express");
// var teamData = express.Router();
// var teamQ = require("./TeamQueries");

// teamData.get("/:team", async (req, res) => {
//   let teamData = await teamQ(req.params.team);
//   res.json(teamData);
// });
