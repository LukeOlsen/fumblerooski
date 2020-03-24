import * as express from "express";
import { Op } from "sequelize";
import Games from "../models/Games";

export const games = express.Router();

games.get("/history/:team", async (req, res, next) => {
  Games.findAll({
    where: {
      [Op.or]: [{ home_team: req.params.team }, { away_team: req.params.team }]
    },
    order: [
      ["season", "DESC"],
      ["WEEK", "DESC"]
    ]
  })
    .then(g => {
      console.log(g);
      res.send(g);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

games.get("/matchup/:myTeam/:yourTeam", async (req, res, next) => {
  Games.findAll({
    where: {
      [Op.or]: {
        [Op.and]: [
          { home_team: req.params.myTeam },
          { away_team: req.params.yourTeam }
        ],
        [Op.and]: [
          { home_team: req.params.yourTeam },
          { away_team: req.params.myTeam }
        ]
      }
    }
  })
    .then(g => {
      res.send(g);
    })
    .catch(err => {
      res.send(err);
    });
});
