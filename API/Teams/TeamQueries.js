const mysql = require("mysql");
const { promisify } = require("util");
const config = require("../../connections");

const sendTeamData = async team => {
  let connection = mysql.createConnection(config);
  let promDbConn = promisify(connection.query).bind(connection);

  const sql = `SELECT * from SchoolsFBS WHERE SchoolsFBS.school = "${team}"`;
  return await promDbConn(sql);
};

module.exports = sendTeamData;
