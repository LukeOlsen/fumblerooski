var express = require("express");
var router = express.Router();
const conference = require("../Conference/ConferenceRoute");
const teamData = require("../Teams/TeamRoute");
const recruit = require("../recruits/RecruitsRoute");

router.use("/conference", conference);
router.use("/teamData", teamData);
router.use("/recruit", recruit);

module.exports = router;
