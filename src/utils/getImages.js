import champions from "./datas/champions";
import summonerSpells from "./datas/summonerSpells";
import itens from "./datas/itens";
export function getImageChampionById(id) {
  const champion = champions.data[id];
  return champion.image.full;
}

export function getImageSummonerSpellById(id) {
  const summonerSpell = summonerSpells.data[id];
  return summonerSpell.image.full;
}
