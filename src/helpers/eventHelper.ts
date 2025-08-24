import allMenu from "../data/food";
import allGeneral from "../data/generalEvents";
import allGames from "../data/games";
import allPeople from "../data/peeps";
import type { GeneralEvent, GameEvent, FoodEvent, GroceryToBuy } from "../types";

const nameHelper = (event: GeneralEvent | GameEvent | FoodEvent) => {
  switch (event.kind) {
  case "GameEvent":
    return event.game.name
    break;
  case "FoodEvent":
    return event.name;
    break;
  case "GeneralEvent":
    return event.name
    break;
  }
}

export const getAllItems = () => {
  const items: GroceryToBuy[] = [];

  allMenu.forEach(m => {
    m.items.forEach(i => {
      items.push({
        ...i,
        sourceType: "Menu",
        sourceName: nameHelper(m),
        day: m.day,
        owners: allPeople.filter(p => p.bringing.includes(i.name.toLowerCase())),
      });
    });
  });

  allGeneral.forEach(g => {
    g.items.forEach(i => {
      items.push({
        ...i,
        sourceType: "General",
        sourceName: nameHelper(g),
        day: g.day,
        owners: allPeople.filter(p => p.bringing.includes(i.name.toLowerCase())),
      });
    });
  });

  allGames.forEach(g => {
    g.items.forEach(i => {
      items.push({
        ...i,
        sourceType: "Game",
        sourceName: nameHelper(g),
        day: "Sunday",
        owners: allPeople.filter(p => p.bringing.includes(i.name.toLowerCase())),
      });
    });
  })

  return items;
}