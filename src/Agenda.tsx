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
    name: string;
    start: string;
    day: Days
}

type AgendaProps = {
};

const defaultData: Event[] = [
  {
    name: 'Setup Activities',
    start: 'all day',
    day: Days.Saturday,
  },
  {
    name: 'Opening Ceremony',
    start: '9:00a',
    day: Days.Sunday,
  },
  {
    name: 'Closing Ceremony',
    start: '4:00p',
    day: Days.Sunday,
  },
  {
    name: 'Dinner',
    start: '6:00p',
    day: Days.Sunday,
  },
  {
    name: 'Clean Up Activities',
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