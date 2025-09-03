import React from 'react'
// import styles from './SleepingArrangements.module.css'

import {
  createColumnHelper,
} from '@tanstack/react-table'

import { RoomsAndSites } from '../data/peeps';
import type { Person, Room } from '../types';
import SortableTable from './SortableTable';

type SleepingRoomByDay = {
  room: Room;
  days: {
    friday: Person[],
    saturday: Person[],
    sunday: Person[],
  }
}

type SleepingArrangementsProps = {
    people: Person[];
};

const columnHelper = createColumnHelper<SleepingRoomByDay>()

const columns = [
  columnHelper.accessor('room', {
    header: () => <span>Room</span>,
    cell: info => info.getValue().name,
  }),
  columnHelper.accessor("days.friday", {
    header: () => <span>Friday</span>,
    cell: info => info.getValue().length,
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => !['?', 'no need'].includes(r.original.room.name)).map(r => r.original.days.friday).map(p => p.length).reduce((acc, val) => acc + val, 0)} people`
  }),
  columnHelper.accessor("days.saturday", {
    header: () => <span>Saturday</span>,
    cell: info => info.getValue().length,
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => !['?', 'no need'].includes(r.original.room.name)).map(r => r.original.days.saturday).map(p => p.length).reduce((acc, val) => acc + val, 0)} people`
  }),
  columnHelper.accessor("days.sunday", {
    header: () => <span>Sunday</span>,
    cell: info => info.getValue().length,
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => !['?', 'no need'].includes(r.original.room.name)).map(r => r.original.days.sunday).map(p => p.length).reduce((acc, val) => acc + val, 0)} people`
  })
]

const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({ people }) => {

  const allRooms = Object.values(RoomsAndSites);

  const peopleInRoomsByDay: SleepingRoomByDay[] = allRooms.map(room => {
    const peopleInRoomFriday: Person[] = people.filter(p => p.sleeping.friday === room);
    const peopleInRoomSaturday: Person[] = people.filter(p => p.sleeping.saturday === room);
    const peopleInRoomSunday: Person[] = people.filter(p => p.sleeping.sunday === room);

    return {
      room: room,
      days: {
        friday: peopleInRoomFriday,
        saturday: peopleInRoomSaturday,
        sunday: peopleInRoomSunday,
      }
    }
  });

  return (
    <>
      <h2>Sleeping Arrangements by Room</h2>
      <SortableTable data={peopleInRoomsByDay} columns={columns} />
    </>
  )
}

export default SleepingArrangements