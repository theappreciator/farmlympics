import React from 'react'
// import styles from './Agenda.module.css'

import AgendaDay from './AgendaDay'
import { makeBrandedType } from './helpers/brandedType';

export const Days = makeBrandedType({
  Friday: "Friday, Aug 29",
  Saturday: "Saturday, Aug 30",
  Sunday: "Sunday, Aug 31",
  Monday: "Monday, Sep 1",
}, 'days')  ;
export type Days = (typeof Days)[keyof typeof Days];

export type Event = {
    lines: string[];
    start: string;
    day: Days
}

type AgendaProps = {
};

const defaultData: Event[] = [
  {
    lines: ['Setup Activities'],
    start: 'all day',
    day: Days.Saturday,
  },
  {
    lines: ['Breakfast', '* CFA Chicken Minis', '* Fruit', '* Coffee', '* Juice'],
    start: '8:00a',
    day: Days.Sunday,
  },
  {
    lines: ['Opening Ceremony'],
    start: '9:00a',
    day: Days.Sunday,
  },
  {
    lines: ['Game 1'],
    start: '9:15a',
    day: Days.Sunday,
  },
  {
    lines: ['Game 2'],
    start: '10:00a',
    day: Days.Sunday,
  },
  {
    lines: ['Game 3'],
    start: '10:45a',
    day: Days.Sunday,
  },
  {
    lines: ['Game 4'],
    start: '11:30a',
    day: Days.Sunday,
  },
  {
    lines: ['Lunch', '* CFA Chicken Sandwich', '* CFA Chicken Nuggets', '* Chicken salad', '* chips', '* fruit'],
    start: '12:15p',
    day: Days.Sunday,
  },
  {
    lines: ['Game 5'],
    start: '1:00p',
    day: Days.Sunday,
  },
  {
    lines: ['Game 6'],
    start: '1:45p',
    day: Days.Sunday,
  },
  {
    lines: ['Game 7'],
    start: '2:30p',
    day: Days.Sunday,
  },
  {
    lines: ['Game 8'],
    start: '3:15p',
    day: Days.Sunday,
  },
  {
    lines: ['Closing Ceremony'],
    start: '4:00p',
    day: Days.Sunday,
  },
  {
    lines: ['Break'],
    start: '4:30p',
    day: Days.Sunday,
  },
  {
    lines: ['Dinner', "* CFA Leftovers", "* Chips", "* Fruit"],
    start: '6:00p',
    day: Days.Sunday,
  },
  {
    lines: ['Campfire', '* S\'mores', '* Milkshakes'],
    start: '7:00p',
    day: Days.Sunday,
  },
  {
    lines: ['Clean Up Activities'],
    start: 'AM',
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