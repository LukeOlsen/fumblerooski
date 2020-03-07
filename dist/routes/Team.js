"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const Team_1 = __importDefault(require("../models/Team"));
exports.team = express.Router();
exports.team.get("/", (req, res) => {
    res.send("route");
});
exports.team.get("/:team", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hit");
    const response = Team_1.default.findAll({
        where: {
            school: req.params.team
        }
    });
    console.log(response);
    res.send(response);
}));
// var express = require("express");
// var teamData = express.Router();
// var teamQ = require("./TeamQueries");
// teamData.get("/:team", async (req, res) => {
//   let teamData = await teamQ(req.params.team);
//   res.json(teamData);
// });
//# sourceMappingURL=Team.js.map