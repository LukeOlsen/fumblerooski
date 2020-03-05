const mysql = require("mysql");
const { promisify } = require("util");
const config = require("../connections");

const sendTeamData = async team => {
  let connection = mysql.createConnection(config);
  let promDbConn = promisify(connection.query).bind(connection);
  let teamInfo;
  let talentInfo;
  let recruitInfo;
  let finalData = {
    team: {},
    recruits: {},
    talentRating: {}
  };

  const teamSql = `SELECT * from SchoolsFBS WHERE SchoolsFBS.school = "${team}"`;
  const talentSql = `SELECT * from TLNT WHERE TLNT.school = "${team}"`;
  const recruitSql = `SELECT * from RCRT WHERE RCRT.year = 2019 and RCRT.committedTo = "${team}"`;

  finalData.team = await promDbConn(teamSql);
  finalData.talentRating = await promDbConn(talentSql);
  finalData.recruits = await promDbConn(recruitSql);
  console.log(finalData);

  return finalData;
};

module.exports = sendTeamData;
