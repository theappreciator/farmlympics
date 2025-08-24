import React from 'react'
// import styles from './Agenda.module.css'

import AgendaDay, { timeDisplay } from './AgendaDay'
// import { makeBrandedType } from './helpers/brandedType';
import type { DayName, GameEvent, GeneralEvent } from './types';
import allGames, { GATHERING_MINUTES } from './data/games';
import allMenu from "./data/food";
import allGeneral from "./data/generalEvents";
import type { FoodEvent, EventInstance } from "./types";

type AgendaProps = {
};

function getGameOrThrow(id: string): GameEvent {
  const game = allGames.find(g => g.game.id === id);
  if (!game) throw new Error(`Game with id "${id}" not found`);
  return game;
}
const sortedGames: GameEvent[] = [];
sortedGames[0] = getGameOrThrow("farmersays");
sortedGames[1] = getGameOrThrow("cowbranding");
sortedGames[2] = getGameOrThrow("cowbanding");
sortedGames[3] = getGameOrThrow("scavenger");
sortedGames[4] = getGameOrThrow("eggstomarket");
sortedGames[5] = getGameOrThrow("cowpatty");

function getMenuOrThrow(day: DayName, time: string): FoodEvent {
  const menu = allMenu.find(m => m.day === day && m.time.toLowerCase() === time.toLowerCase());
  if (!menu) throw new Error(`Game with day "${day}" and time "${time}" not found`);
  return menu;
}
function getGeneralEventOrThrow(day: DayName, time: string): GeneralEvent {
  const generalEvent = allGeneral.find(g => g.day === day && g.time.toLowerCase() === time.toLowerCase());
  if (!generalEvent) throw new Error(`Game with day "${day}" and time "${time}" not found`);
  return generalEvent;
}

let sundayRunningStartTime;

const defaultData: EventInstance[] = [
  {
    lines: getGeneralEventOrThrow("Saturday", "7a"),
    start: 0,
    day: "Saturday",
  },
  {
    lines: getMenuOrThrow("Saturday", "8a"),
    start: 800,
    day: "Saturday",
  },
  {
    lines: getMenuOrThrow("Saturday", "12p"),
    start: 1200,
    day: "Saturday",
  },
  {
    lines: getGeneralEventOrThrow("Saturday", "1p"),
    start: 1300,
    day: "Saturday",
  },
  {
    lines: getMenuOrThrow("Saturday", "6p"),
    start: 1800,
    day: "Saturday",
  },
  {
    // lines: ['Last Minute Setup Activities', '* get ice', '* game setup', '* drink station setup', '* last minute questions'],
    lines: getGeneralEventOrThrow("Sunday", "7a"),
    start: (() => {sundayRunningStartTime=700; const time = sundayRunningStartTime; sundayRunningStartTime+= 100; return time})(),
    day: "Sunday",
  },
  {
    lines: getMenuOrThrow("Sunday", "8a"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= 100; return time})(),
    day: "Sunday",
  },
  {
    lines: <div style={{textAlign: "left", fontWeight: 700}}>Opening Ceremony (15 min)</div>,
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= 25; return time})(),
    day: "Sunday",
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[0].gatheringTime; return time})(),
    day: "Sunday",
  },
  {
    lines: sortedGames[0],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[0].playTime; return time})(),
    day: "Sunday",
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[1].gatheringTime; return time})(),
    day: "Sunday",
  },
  {
    lines: sortedGames[1],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[1].playTime; return time})(),
    day: "Sunday",
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[2].gatheringTime; return time})(),
    day: "Sunday",
  },
  {
    lines: sortedGames[2],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[2].playTime; return time})(),
    day: "Sunday",
  },
  {
    lines: getMenuOrThrow("Sunday", "12p"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= 75; return time})(),
    day: "Sunday",
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[3].gatheringTime; return time})(),
    day: "Sunday",
  },
  {
    lines: sortedGames[3],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[3].playTime; return time})(),
    day: "Sunday",
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[4].gatheringTime; return time})(),
    day: "Sunday",
  },
  {
    lines: sortedGames[4],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[4].playTime; return time})(),
    day: "Sunday",
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[5].gatheringTime; return time})(),
    day: "Sunday",
  },
  {
    lines: sortedGames[5],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[5].playTime; return time})(),
    day: "Sunday",
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=GATHERING_MINUTES; return time})(),
    day: "Sunday",
  },
  {
    lines: (
      <div style={{textAlign: "left"}}>
        <div style={{fontWeight: 700}}>
          Closing Ceremony (30 min)
        </div>
        <div style={{fontStyle: "italic"}}>
          Every day ends by planning ahead for tomorrow
        </div>
        <div>
          location → pond
        </div>
        <ul style={{marginTop: 0}}>
          <li>Need car drivers</li>
        </ul>
      </div>
    ),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=50; return time})(),
    day: "Sunday",
  },
  {
    lines: getMenuOrThrow("Sunday", "4p"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=125; return time})(),
    day: "Sunday",
  },
  {
    lines: getMenuOrThrow("Sunday", "6p"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=100; return time})(),
    day: "Sunday",
  },
  {
    lines: getMenuOrThrow("Sunday", "7p"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=100; return time})(),
    day: "Sunday",
  },
  {
    lines: getGeneralEventOrThrow("Monday", "7a"),
    start: 1,
    day: "Monday",
  },
  {
    lines: getMenuOrThrow("Monday", "8a"),
    start: 900,
    day: "Monday",
  },
  {
    lines: getGeneralEventOrThrow("Monday", "11a"),
    start: 1100,
    day: "Monday",
  },
]

const Agenda: React.FC<AgendaProps> = ({ }) => {
  return (
    <>
      <AgendaDay day={"Friday"} agenda={defaultData.filter(e => e.day === "Friday")} />
      <AgendaDay day={"Saturday"} agenda={defaultData.filter(e => e.day === "Saturday")} />
      <AgendaDay day={"Sunday"} agenda={defaultData.filter(e => e.day === "Sunday")} />  
      <AgendaDay day={"Monday"} agenda={defaultData.filter(e => e.day === "Monday")} />  
    </>
  )
}

export default Agenda