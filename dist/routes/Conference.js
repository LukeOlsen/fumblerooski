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
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
exports.conference = express.Router();
exports.conference.get("/:conference", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("big time conference");
}));
// var express = require("express");
// var conference = express.Router();
// var conferenceQ = require("./ConferenceQueries");
// conference.get("/:conference", async (req, res) => {
//   let confData;
//   confData = await conferenceQ.sendConference(req.params.conference);
//   res.json(confData);
// });
//# sourceMappingURL=Conference.js.map