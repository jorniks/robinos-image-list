"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_json_1 = require("./teams/afl/index.json");
var index_json_2 = require("./teams/any_others/index.json");
var index_json_3 = require("./teams/cricket/index.json");
var index_json_4 = require("./teams/f1/drivers/index.json");
var index_json_5 = require("./teams/f1/locations/index.json");
var epl_json_1 = require("./teams/football/epl.json");
var bundesliga_json_1 = require("./teams/football/bundesliga.json");
var eredivisie_json_1 = require("./teams/football/eredivisie.json");
var la_liga_json_1 = require("./teams/football/la_liga.json");
var league1_json_1 = require("./teams/football/league1.json");
var primeira_liga_json_1 = require("./teams/football/primeira_liga.json");
var serie_a_json_1 = require("./teams/football/serie_a.json");
var superligaen_json_1 = require("./teams/football/superligaen.json");
var index_json_6 = require("./teams/gaming/index.json");
var index_json_7 = require("./teams/nba/index.json");
var index_json_8 = require("./teams/ncaa/index.json");
var index_json_9 = require("./teams/nfl/index.json");
var index_json_10 = require("./teams/politics/index.json");
// LEAGUE IMAGES
var index_json_11 = require("./league-images/index.json");
// TOKEN IMAGES
var index_json_12 = require("./token-images/index.json");
var teamImages = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, index_json_1.default), index_json_2.default), index_json_3.default), index_json_4.default), index_json_5.default), epl_json_1.default), bundesliga_json_1.default), eredivisie_json_1.default), la_liga_json_1.default), league1_json_1.default), primeira_liga_json_1.default), serie_a_json_1.default), superligaen_json_1.default), index_json_6.default), index_json_7.default), index_json_8.default), index_json_9.default), index_json_10.default);
var leagueImages = __assign({}, index_json_11.default);
var tokenImages = __assign({}, index_json_12.default);
function getTeamImage(teamName) {
    var matchingKey = Object.keys(teamImages).find(function (key) { return key.toLowerCase().replace(' ', '_') === teamName; });
    return matchingKey ? teamImages[matchingKey] : "/img/token_40px.png";
}
function getLeagueImage(leagueName) {
    var matchingKey = Object.keys(leagueImages).find(function (key) { return key.toLowerCase().replace(' ', '_') === leagueName; });
    return matchingKey ? leagueImages[matchingKey] : "/img/token_40px.png";
}
function getTokenImage(tokenName) {
    var matchingKey = Object.keys(tokenImages).find(function (key) { return key.toLowerCase().replace(' ', '_') === tokenName; });
    return matchingKey ? tokenImages[matchingKey] : "/img/token_40px.png";
}
exports.default = { getTeamImage: getTeamImage, getLeagueImage: getLeagueImage, getTokenImage: getTokenImage };
