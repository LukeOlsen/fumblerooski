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
import { SPRankings } from "../models/SPRankings";
import { Sequelize } from "sequelize";

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

team.get("/teamSPRank/:team/:year/:side", async (req, res) => {
  const offenseAtt: string[] = [
    "offenseSuccess",
    "offenseExplosiveness",
    "offenseRushing",
    "offensePassing",
    "offenseStandardDowns",
    "offensePassingDowns",
  ];

  const defenseAtt: string[] = [
    "defenseSuccess",
    "defenseExplosiveness",
    "defenseRushing",
    "defensePassing",
    "defenseStandardDowns",
    "defensePassingDowns",
  ];
  SPRankings.findAll({
    attributes: req.params.side == "offense" ? offenseAtt : defenseAtt,
    where: {
      team: req.params.team,
      year: req.params.year,
    },
  })
    .then(async (data: any) => {
      const formatData = await TeamFunctions.cleanSpRank(data[0].dataValues);
      res.send(formatData);
    })
    .catch((err) => {
      res.send(err);
    });
});

team.get("/conferenceSPRank/:conference/:year/:side", async (req, res) => {
  const offenseAtt: any = [
    [Sequelize.fn("AVG", Sequelize.col("offenseSuccess")), "offenseSuccess"],
    [
      Sequelize.fn("AVG", Sequelize.col("offenseExplosiveness")),
      "offenseExplosiveness",
    ],
    [Sequelize.fn("AVG", Sequelize.col("offenseRushing")), "offenseRushing"],
    [Sequelize.fn("AVG", Sequelize.col("offensePassing")), "offensePassing"],
    [
      Sequelize.fn("AVG", Sequelize.col("offenseStandardDowns")),
      "offenseStandardDowns",
    ],
    [
      Sequelize.fn("AVG", Sequelize.col("offensePassingDowns")),
      "offensePassingDowns",
    ],
  ];

  const defenseAtt: any = [
    [Sequelize.fn("AVG", Sequelize.col("defenseSuccess")), "defenseSuccess"],
    [
      Sequelize.fn("AVG", Sequelize.col("defenseExplosiveness")),
      "defenseExplosiveness",
    ],
    [Sequelize.fn("AVG", Sequelize.col("defenseRushing")), "defenseRushing"],
    [Sequelize.fn("AVG", Sequelize.col("defensePassing")), "defensePassing"],
    [
      Sequelize.fn("AVG", Sequelize.col("defenseStandardDowns")),
      "defenseStandardDowns",
    ],
    [
      Sequelize.fn("AVG", Sequelize.col("defensePassingDowns")),
      "defensePassingDowns",
    ],
  ];

  SPRankings.findAll({
    attributes: req.params.side === "offense" ? offenseAtt : defenseAtt,
    where: {
      conference: req.params.conference,
      year: req.params.year,
    },
  })
    .then((data: any) => {
      console.log(data[0].dataValues);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});
