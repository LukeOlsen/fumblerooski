var express = require("express");
var router = express.Router();
const conference = require("../Conference/ConferenceRoute");
const teamData = require("../Teams/TeamRoute");

router.use("/conference", conference);
router.use("/teamData", teamData);

module.exports = router;
