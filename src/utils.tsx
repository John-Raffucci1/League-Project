import { IChampionStats } from "./Types/ChampionTypes";

export const getFormatedKey = (
  key: string,
  level: number,
  stats: IChampionStats
) => {
  switch (key) {
    case "hp":
      return "Hp" + `: ${stats[key] + stats.hpperlevel * level}`;
    case "hpperlevel":
      return "Hp per Level" + `: ${stats[key]}`;
    case "mp":
      return "Mp" + `: ${stats[key] + stats.mpperlevel * level}`;
    case "mpperlevel":
      return "Mp per Level" + `: ${stats[key]}`;
    case "movespeed":
      return "Movespeed" + `: ${stats[key]}`;
    case "armor":
      return (
        "Armor" + `: ${Math.floor(stats[key] + stats.armorperlevel * level)}`
      );
    case "armorperlevel":
      return "Armor per Level" + `: ${Math.floor(stats[key])}`;
    case "spellblock":
      return (
        "Magic Resist" +
        `: ${Math.floor(stats[key] + stats.spellblockperlevel * level)}`
      );
    case "spellblockperlevel":
      return "Magic Resist per Level" + `: ${Math.floor(stats[key])}`;
    case "attackrange":
      return "Attack Range" + `: ${Math.floor(stats[key])}`;
    case "hpregen":
      return (
        "Hp Regen" +
        `: ${Math.floor(stats[key] + stats.hpregenperlevel * level)}`
      );
    case "hpregenperlevel":
      return "Hp regen per :Level" + `: ${Math.floor(stats[key])}`;
    case "mpregen":
      return (
        "Mp regen" +
        `: ${Math.floor(stats[key] + stats.mpregenperlevel * level)}`
      );
    case "mpregenperlevel":
      return "Mp regen per Level" + `: ${Math.floor(stats[key])}`;
    case "crit":
      return "Crit" + `: ${stats[key]}`;
    case "critperlevel":
      return "Crit per Level" + `: ${stats[key]}`;
    case "attackdamage":
      return (
        "AD" +
        `: ${Math.floor(stats[key] + stats.attackdamageperlevel * level)}`
      );
    case "attackdamageperlevel":
      return "AD per Level" + `: ${stats[key]}`;
    case "attackspeedperlevel":
      return "AS per Level" + `: ${stats[key]}`;
    case "attackspeed":
      return "AS" + `: ${Math.floor(stats[key])}`;
    default:
      return key;
  }
};

export const getFormatedFilter = (filter: string) => {
  switch (filter) {
    case "ARAM":
      return "12";
    case "Summoners Rift":
      return "11";
    default:
      return filter;
  }
};
