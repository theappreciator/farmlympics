export type DayName = "Friday" | "Saturday" | "Sunday" | "Monday";
export const DayNames: Record<DayName, string> = {
  "Friday": "Friday, August 29",
  "Saturday": "Saturday, August 30",
  "Sunday": "Sunday, August 31",
  "Monday": "Monday, September 1",
}

export type MealType = "Breakfast" | "Lunch" | "Dinner" | "Other" | "Other-Evening";

export interface BaseEvent {
  kind: "FoodEvent" | "GameEvent" | "GeneralEvent"
  name: string;
  day: DayName;
  time: string;
  info: string[];
  items: Grocery[];
  showDetail?: boolean;
}

export interface FoodEvent extends BaseEvent {
  kind: "FoodEvent";
  menu: Menu[];
  meal: MealType;
}

export interface Grocery {
  name: string;
  qty: string;
  preferredStore: "None" | "Home" | "Food Lion" | "Harris Teeter" | "Midtown Market" | "Lowes Foods" | "Costco" | "Lowes" | "Amazon" | "Chick-Fil-A";
}

export interface GroceryToBuy extends Grocery {
  sourceType: string;
  sourceName: string;
  day: DayName;
  owners: Person[];
}

export interface Menu {
  name: string;
}

export interface GeneralEvent extends BaseEvent {
  kind: "GeneralEvent";
}

export interface Game {
  kind: "Game";
  id: string;
  name: string;
  intro: string;
  what: string;
  winning: string;
  how: (string | string[])[];
  rules: (string | string[])[];
  setup: string[];
  time: string[];
}

export type GameLocation = "field" | "front yard" | "back yard" | "baseball field" | "whole yard" | "tbd";

export interface GameEvent extends Omit<BaseEvent, "name" | "day" | "time"> {
  kind: "GameEvent";
  game: Game;
  order: number;
  playTime: number;
  gatheringTime: number; // Time to gather for the game
  location: GameLocation;
}

export type Generation = "Silent Gen" | "Baby Boomers" | "Gen X" | "Millennials" | "Gen Z" | "Gen Alpha" | "Little One";

export interface Room {
  name: string;
  site: string;
}

export interface Shirt {
  order: number;
  code: string;
  display: string;
}

export type Person = {
  id?: number;
  name: string;
  generation: Generation;
  shirt: Shirt;
  team: Team;
  sleeping: {
    friday: Room,
    saturday: Room,
    sunday: Room,
  };
  arrival?: Date | 'all',
  departure?: Date | 'all',
  bringing: string[],
}

export type PersonFullName = {
  firstName: string;
  lastName: string;
  name: string;
}

export interface Team {
  name: string;
  type: "main" | "secondary";
}

export type EventInstance = {
    lines: string[] | BaseEvent | GameEvent | FoodEvent | React.ReactNode;
    start: number;
    day: DayName;
}