import { Router } from "express";
import { Op } from "sequelize";
import SchoolsFBS from "../models/Team";
import Recruits from "../models/Recruits";
import Talents from "../models/Talents";
import Games from "../models/Games";
import Records from "../models/Records";
import PPAGameAverages from "../models/PPAGameAverages";
import TeamFunctions from "../Teams/TeamData";
import RecruitFunctions from "../recruits/RecruitData";
import GamesFunctions from "../Games/GamesData";

export const team = Router();

team.get("/", (req, res) => {
  SchoolsFBS.findAll().then((teams) => {
    res.send(teams);
  });
});

team.get("/teamData/:team/:year", async (req, res, next) => {
  const schoolData = SchoolsFBS.findAll({
    attributes: ["conference", "division", "mascot", "logos_1"],
    where: {
      school: req.params.team,
    },
    include: [
      {
        model: Games,
        attributes: [
          "id",
          "home_team",
          "home_points",
          "away_team",
          "away_points",
        ],
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
        attributes: [
          "id",
          "home_team",
          "home_points",
          "away_team",
          "away_points",
        ],
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
        attributes: ["total_wins", "total_losses"],
        where: {
          year: req.params.year,
          team: req.params.team,
        },
      },
      {
        model: PPAGameAverages,
        attributes: [
          "gameId",
          "week",
          "season",
          "season_type",
          "opponent",
          "offense_firstDown",
          "offense_overall",
          "offense_passing",
          "offense_rushing",
          "offense_secondDown",
          "offense_thirdDown",
          "defense_firstDown",
          "defense_overall",
          "defense_passing",
          "defense_rushing",
          "defense_secondDown",
          "defense_thirdDown",
        ],
        where: {
          team: req.params.team,
          season: req.params.year,
        },
      },
    ],
    order: [
      [{ model: PPAGameAverages, as: "ppaGameAverages" }, "gameId", "ASC"],
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

  const BCR = Recruits.findAll({
    attributes: ["stars"],
    where: {
      year: {
        [Op.between]: [Number(req.params.year) - 3, Number(req.params.year)],
      },
      committedTo: req.params.team,
    },
  });

  Promise.all([schoolData, recruitData, talentData, BCR])
    .then(async (result: any) => {
      let newPpaFormat = await TeamFunctions.cleanPPA(
        result[0][0].ppaGameAverages
      );

      let BCresponse = await RecruitFunctions.calculateBCR(result[3]);

      let gameSort = await GamesFunctions.cleanTeamPageGames(
        result[0][0].homeGames,
        result[0][0].awayGames
      );
      result.push(newPpaFormat);
      result.push(BCresponse);
      result.push(gameSort);
      res.send(result);
    })

    .catch((err) => {
      console.log(err);
    });
});
