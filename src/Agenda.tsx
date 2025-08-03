import React from 'react'
// import styles from './Agenda.module.css'

import AgendaDay, { timeDisplay } from './AgendaDay'
import { makeBrandedType } from './helpers/brandedType';
import type { GameEvent } from './games';
import allGames, { GATHERING_MINUTES } from './games';

export const Days = makeBrandedType({
  Friday: "Friday, Aug 29",
  Saturday: "Saturday, Aug 30",
  Sunday: "Sunday, Aug 31",
  Monday: "Monday, Sep 1",
}, 'days')  ;
export type Days = (typeof Days)[keyof typeof Days];

export type Event = {
    lines: string[] | GameEvent | React.ReactNode;
    start: number;
    day: Days;
}

type AgendaProps = {
};

const sortedGamesO = allGames.sort((a, b) => a.order - b.order);

const sortedGames = new Array(6);
sortedGames[0] = (allGames.find(g => g.game.id === "farmersays"));
sortedGames[1] = (allGames.find(g => g.game.id === "cowbranding"));
sortedGames[2] = (allGames.find(g => g.game.id === "cowbanding"));
sortedGames[3] = (allGames.find(g => g.game.id === "scavenger"));
sortedGames[4] = (allGames.find(g => g.game.id === "eggstomarket"));
sortedGames[5] = (allGames.find(g => g.game.id === "plantatree"));

let sundayRunningStartTime;

const defaultData: Event[] = [
  {
    lines: ['Setup Activities', '* setup tents', '* setup games', '* setup music and audio'],
    start: 0,
    day: Days.Saturday,
  },
  {
    lines: ['Dry Run/Walkthrough'],
    start: 1600,
    day: Days.Saturday,
  },
  {
    lines: ['Dinner', '* TBD'],
    start: 1800,
    day: Days.Saturday,
  },
  {
    lines: ['Last Minute Setup Activities', '* get ice', '* game setup', '* drink station setup', '* last minute questions'],
    start: (() => {sundayRunningStartTime=700; const time = sundayRunningStartTime; sundayRunningStartTime+= 100; return time})(),
    day: Days.Sunday,
  },
  {
    lines: ['Breakfast', '* CFA Chicken Minis', '* Fruit', '* Coffee', '* Juice'],
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
    lines: ['Lunch (45 min)', '* CFA Chicken Sandwich', '* CFA Chicken Nuggets', '* Chicken salad', '* chips', '* fruit'],
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
    lines: <div style={{textAlign: "left", fontWeight: 700}}>Closing Ceremony (30 min)</div>,
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=50; return time})(),
    day: Days.Sunday,
  },
  {
    lines: ['Cocktail Hour', '* formal attire'],
    start: (() => {const time=sundayRunningStartTime; sundayRunningStartTime+=125; return time})(),
    day: Days.Sunday,
  },
  {
    lines: ['Dinner', "* CFA Leftovers", "* Chips", "* Fruit"],
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
    lines: ['Breakfast', '* Biscuits', '* Sausage', '* Eggs', '* Fruit', '* Coffee'],
    start: 900,
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