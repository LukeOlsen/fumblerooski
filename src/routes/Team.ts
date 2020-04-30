import { Router } from "express";
import { Op } from "sequelize";
import SchoolsFBS from "../models/Team";
import Recruits from "../models/Recruits";
import Talents from "../models/Talents";
import Games from "../models/Games";
import Records from "../models/Records";

export const team = Router();

team.get("/", (req, res) => {
  SchoolsFBS.findAll().then((teams) => {
    res.send(teams);
  });
});

team.get("/teamData/:team/:year", async (req, res, next) => {
  const schoolData = SchoolsFBS.findAll({
    where: {
      school: req.params.team,
    },
    include: [
      {
        model: Games,
        as: "homeGames",
        where: {
          [Op.or]: [
            { home_team: req.params.team },
            { away_team: req.params.team },
          ],
          season: req.params.year,
        },
      },
      {
        model: Games,
        as: "awayGames",
        where: {
          [Op.or]: [
            { home_team: req.params.team },
            { away_team: req.params.team },
          ],
          season: req.params.year,
        },
      },
      {
        model: Records,
        as: "teamRecord",
        where: {
          year: req.params.year,
          team: req.params.team,
        },
      },
    ],
  });

  const recruitData = Recruits.findAll({
    where: {
      committedTo: req.params.team,
      year: req.params.year,
    },
  });

  const talentData = Talents.findAll({
    where: {
      school: req.params.team,
      year: req.params.year,
    },
  });

  Promise.all([schoolData, recruitData, talentData])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
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
