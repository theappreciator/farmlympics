import React from 'react'
// import styles from './Agenda.module.css'

import AgendaDay, { timeDisplay } from './AgendaDay'
import { makeBrandedType } from './helpers/brandedType';
import type { GameEvent } from './games';
import allGames, { GATHERING_MINUTES } from './games';
import allMenu from "./food";
import type { FoodEvent } from "./food";

export const Days = makeBrandedType({
  Friday: "Friday, Aug 29",
  Saturday: "Saturday, Aug 30",
  Sunday: "Sunday, Aug 31",
  Monday: "Monday, Sep 1",
}, 'days')  ;
export type Days = (typeof Days)[keyof typeof Days];

export type Event = {
    lines: string[] | GameEvent | FoodEvent | React.ReactNode;
    start: number;
    day: Days;
}

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

function getMenuOrThrow(day: "Friday" | "Saturday" | "Sunday" | "Monday", time: string): FoodEvent {
  const menu = allMenu.find(m => m.day === day && m.time.toLowerCase() === time.toLowerCase());
  if (!menu) throw new Error(`Game with day "${day}" and time "${time}" not found`);
  return menu;
}

let sundayRunningStartTime;

const defaultData: Event[] = [
  {
    lines: ['Setup Activities', '* setup tents', '* setup games', '* setup music and audio'],
    start: 0,
    day: Days.Saturday,
  },
  {
    lines: getMenuOrThrow("Saturday", "8a"),
    start: 800,
    day: Days.Saturday,
  },
  {
    lines: getMenuOrThrow("Saturday", "12p"),
    start: 1200,
    day: Days.Saturday,
  },
  {
    lines: ['Dry Run/Walkthrough'],
    start: 1300,
    day: Days.Saturday,
  },
  {
    lines: getMenuOrThrow("Saturday", "6p"),
    start: 1800,
    day: Days.Saturday,
  },
  {
    lines: ['Last Minute Setup Activities', '* get ice', '* game setup', '* drink station setup', '* last minute questions'],
    start: (() => {sundayRunningStartTime=700; const time = sundayRunningStartTime; sundayRunningStartTime+= 100; return time})(),
    day: Days.Sunday,
  },
  {
    lines: getMenuOrThrow("Sunday", "8a"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= 100; return time})(),
    day: Days.Sunday,
  },
  {
    lines: <div style={{textAlign: "left", fontWeight: 700}}>Opening Ceremony (15 min)</div>,
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= 25; return time})(),
    day: Days.Sunday,
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[0].gatheringTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: sortedGames[0],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[0].playTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[1].gatheringTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: sortedGames[1],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[1].playTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[2].gatheringTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: sortedGames[2],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[2].playTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: getMenuOrThrow("Sunday", "12p"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= 75; return time})(),
    day: Days.Sunday,
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[3].gatheringTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: sortedGames[3],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[3].playTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[4].gatheringTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: sortedGames[4],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[4].playTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[5].gatheringTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: sortedGames[5],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+= sortedGames[5].playTime; return time})(),
    day: Days.Sunday,
  },
  {
    lines: [`Gathering time (${timeDisplay(GATHERING_MINUTES, "short")})`],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=GATHERING_MINUTES; return time})(),
    day: Days.Sunday,
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
          location → baseball field
        </div>
      </div>
    ),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=50; return time})(),
    day: Days.Sunday,
  },
  {
    lines: getMenuOrThrow("Sunday", "4p"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=125; return time})(),
    day: Days.Sunday,
  },
  {
    lines: getMenuOrThrow("Sunday", "6p"),
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=100; return time})(),
    day: Days.Sunday,
  },
  {
    lines: ['Campfire', '* S\'mores', '* Milkshakes'],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=100; return time})(),
    day: Days.Sunday,
  },
  {
    lines: ['Clean Up Activities'],
    start: 1,
    day: Days.Monday,
  },
  {
    lines: getMenuOrThrow("Monday", "8a"),
    start: 900,
    day: Days.Monday,
  },
  {
    lines: getMenuOrThrow("Monday", "12p"),
    start: 1200,
    day: Days.Monday,
  },
  {
    lines: getMenuOrThrow("Monday", "6p"),
    start: 1800,
    day: Days.Monday,
  },
]

const Agenda: React.FC<AgendaProps> = ({ }) => {
  return (
    <>
      <AgendaDay day={Days.Friday} agenda={defaultData.filter(e => e.day === Days.Friday)} />
      <AgendaDay day={Days.Saturday} agenda={defaultData.filter(e => e.day === Days.Saturday)} />
      <AgendaDay day={Days.Sunday} agenda={defaultData.filter(e => e.day === Days.Sunday)} />  
      <AgendaDay day={Days.Monday} agenda={defaultData.filter(e => e.day === Days.Monday)} />  
    </>
  )
}

export default Agenda