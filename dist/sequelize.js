"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: process.env.DB_NAME,
    dialect: "mysql",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    storage: ":memory:",
    models: [__dirname + "/models"] // or [Player, Team],
});
//# sourceMappingURL=sequelize.js.map