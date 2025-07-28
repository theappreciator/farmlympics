import React from 'react'
import './Agenda.module.css'

import AgendaDay from './AgendaDay'

export const Days = {
  Friday: "Friday, Aug 29",
  Saturday: "Saturday, Aug 30",
  Sunday: "Sunday, Aug 31",
  Monday: "Monday, Sep 1",
}
export type Days = typeof Days[keyof typeof Days];

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
      <AgendaDay day="Friday" agenda={defaultData.filter(e => e.day === Days.Friday)} />
      <AgendaDay day="Saturday" agenda={defaultData.filter(e => e.day === Days.Saturday)} />
      <AgendaDay day="Sunday" agenda={defaultData.filter(e => e.day === Days.Sunday)} />  
      <AgendaDay day="Monday" agenda={defaultData.filter(e => e.day === Days.Monday)} />  
    </>
  )
}

export default Agenda