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
import { TeamImageType } from './interfaces'

const allImages: TeamImageType = {
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
  ...politics,
  ...leagueImageObject,
  ...tokenImageObject
}

export const getImageLink = (keyName: string): string => {
  const trimmedTeamName= keyName.trim()
  const modifiedTeamName= trimmedTeamName.toLowerCase().replace(' ', '_')
  const matchingKey = Object.keys(allImages).find(key => key.toLowerCase().replace(' ', '_') === modifiedTeamName);
  return matchingKey ? allImages[matchingKey as keyof typeof allImages] : "/img/robinos_isotype.svg";
}