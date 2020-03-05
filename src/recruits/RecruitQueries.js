const mysql = require("mysql");
const { promisify } = require("util");
const config = require("../connections");

const sendTeamData = async (team, year) => {
  let connection = mysql.createConnection(config);
  let promDbConn = promisify(connection.query).bind(connection);

  const sql = `SELECT * from RCRT WHERE RCRT.committedTo="${team}" and RCRT.year="${year}"`;
  return await promDbConn(sql);
};

module.exports = sendTeamData;
