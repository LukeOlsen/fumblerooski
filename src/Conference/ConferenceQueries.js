// const mysql = require("mysql");
// const { promisify } = require("util");
// const config = require("../connections");

// const sendConference = async conference => {
//   let connection = mysql.createConnection(config);
//   let promDbConn = promisify(connection.query).bind(connection);

//   const sql = `SELECT SchoolsFBS.school FROM fumblerooski_test.SchoolsFBS WHERE conference="${conference}"`;
//   return await promDbConn(sql);
// };

// exports.sendConference = sendConference;
