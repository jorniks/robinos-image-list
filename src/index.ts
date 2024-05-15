import afl from './teams/afl/index.json'
import any_others from './teams/any_others/index.json'
import cricket from './teams/cricket/index.json'
import drivers from './teams/f1/drivers/index.json'
import locations from './teams/f1/locations/index.json'
import epl from "./teams/football/epl.json"
import bundesliga from "./teams/football/bundesliga.json"
import eredivisie from "./teams/football/eredivisie.json"
import la_liga from "./teams/football/la_liga.json"
import league1 from "./teams/football/league1.json"
import primeira_liga from "./teams/football/primeira_liga.json"
import serie_a from "./teams/football/serie_a.json"
import superligaen from "./teams/football/superligaen.json"
import gaming from './teams/gaming/index.json'
import nba from './teams/nba/index.json'
import ncaa from './teams/ncaa/index.json'
import nfl from './teams/nfl/index.json'
import politics from './teams/politics/index.json'
// LEAGUE IMAGES
import leagueImageObject from './league-images/index.json'
// TOKEN IMAGES
import tokenImageObject from './token-images/index.json'
import { LeagueImageType, TeamImageType, TokenImageType } from './types'


const teamImages: TeamImageType = {
  ...afl,
  ...any_others,
  ...cricket,
  ...drivers,
  ...locations,
  ...epl,
  ...bundesliga,
  ...eredivisie,
  ...la_liga,
  ...league1,
  ...primeira_liga,
  ...serie_a,
  ...superligaen,
  ...gaming,
  ...nba,
  ...ncaa,
  ...nfl,
  ...politics
}

const leagueImages: LeagueImageType = {
  ...leagueImageObject
}

const tokenImages: TokenImageType = {
  ...tokenImageObject
}

function getTeamImage(teamName: string): string {
  const matchingKey = Object.keys(teamImages).find(key => key.toLowerCase().replace(' ', '_') === teamName);
  return matchingKey ? teamImages[matchingKey as keyof typeof teamImages] : "/img/token_40px.png";
}

function getLeagueImage(leagueName: string): string {
  const matchingKey = Object.keys(leagueImages).find(key => key.toLowerCase().replace(' ', '_') === leagueName);
  return matchingKey ? leagueImages[matchingKey as keyof typeof leagueImages] : "/img/token_40px.png";
}

function getTokenImage(tokenName: string): string {
  const matchingKey = Object.keys(tokenImages).find(key => key.toLowerCase().replace(' ', '_') === tokenName);
  return matchingKey ? tokenImages[matchingKey as keyof typeof tokenImages] : "/img/token_40px.png";
}


export default { getTeamImage, getLeagueImage, getTokenImage }