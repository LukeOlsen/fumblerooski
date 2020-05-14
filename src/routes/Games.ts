import * as express from "express";
import { Sequelize, Op } from "sequelize";
import Games from "../models/Games";
import SchoolsFBS from "../models/Team";
import AdvancedBoxedScores from "../models/AdvancedBoxScores";
import GameStats from "../models/GameStats";
import GameDrives from "../models/GameDrives";

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

games.get("/ABS/:gameId", async (req, res) => {
  const advancedScores = AdvancedBoxedScores.findOne({
    where: {
      id: req.params.gameId,
    },
  });

  const BoxedScores = GameStats.findOne({
    where: {
      id: req.params.gameId,
    },
  });

  const drives = GameDrives.findAll({
    where: {
      game_id: req.params.gameId,
    },
  });

  Promise.all([advancedScores, BoxedScores, drives])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});
