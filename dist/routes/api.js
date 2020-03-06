"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const Conference_1 = require("./Conference");
const Recruits_1 = require("./Recruits");
const Team_1 = require("./Team");
exports.api = express.Router();
exports.api.use("/conference", Conference_1.conference);
exports.api.use("/recruit", Recruits_1.recruit);
exports.api.use("/team", Team_1.team);
//# sourceMappingURL=api.js.map