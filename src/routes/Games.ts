import * as express from "express";
import { Sequelize, Op } from "sequelize";
import Games from "../models/Games";
import SchoolsFBS from "../models/Team";

export const games = express.Router();

games.get("/history/:team", async (req, res, next) => {
  Games.findAll({
    where: {
      [Op.or]: [{ home_team: req.params.team }, { away_team: req.params.team }],
    },
    order: [
      ["season", "DESC"],
      ["WEEK", "ASC"],
    ],
  })
    .then((g) => {
      console.log(g);
      res.send(g);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

games.get("/matchup/:myTeam/:yourTeam", async (req, res, next) => {
  const t1 = req.params.myTeam;
  const t2 = req.params.yourTeam;
  console.log(t2);
  Games.findAll({
    where: {
      home_team: {
        [Op.or]: [t1, t2],
      },
      away_team: {
        [Op.or]: [t1, t2],
      },
    },
    order: [["season", "DESC"]],
    include: [
      {
        model: SchoolsFBS,
        as: "homeTeam",
        attributes: ["logos_1"],
        where: {
          school: {
            [Op.or]: [t1, t2],
          },
        },
      },
      {
        model: SchoolsFBS,
        as: "awayTeam",
        attributes: ["logos_1"],
        where: {
          school: {
            [Op.or]: [t1, t2],
          },
        },
      },
    ],
  })
    .then((g) => {
      res.send(g);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});
