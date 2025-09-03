import React from 'react'
// import styles from './SleepingArrangementsBySite.module.css'

import {
  createColumnHelper,
} from '@tanstack/react-table'
import { RoomsAndSites } from '../data/peeps';
import type { Person } from '../types';
import SortableTable from './SortableTable';

type SleepingSiteByDay = {
  site: string;
  days: {
    friday: Person[],
    saturday: Person[],
    sunday: Person[],
  }
}

type SleepingArrangementsProps = {
    people: Person[];
};

const columnHelper = createColumnHelper<SleepingSiteByDay>()

const columns = [
  columnHelper.accessor('site', {
    header: () => <span>Site</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("days.friday", {
    header: () => <span>Friday</span>,
    cell: info => info.getValue().length,
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => !['?', 'no need', 'Wayne\'s'].includes(r.original.site)).map(r => r.original.days.friday).map(p => p.length).reduce((acc, val) => acc + val, 0)} people`
  }),
  columnHelper.accessor("days.saturday", {
    header: () => <span>Saturday</span>,
    cell: info => info.getValue().length,
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => !['?', 'no need', 'Wayne\'s'].includes(r.original.site)).map(r => r.original.days.saturday).map(p => p.length).reduce((acc, val) => acc + val, 0)} people`
  }),
  columnHelper.accessor("days.sunday", {
    header: () => <span>Sunday</span>,
    cell: info => info.getValue().length,
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => !['?', 'no need', 'Wayne\'s'].includes(r.original.site)).map(r => r.original.days.sunday).map(p => p.length).reduce((acc, val) => acc + val, 0)} people`
  })
]

const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({ people }) => {
  const allSites = Object.values(RoomsAndSites).reduce((acc, val) => {
    if (!acc.includes(val.site)) {
      acc.push(val.site);
    }
    return acc;
  }, [] as string[]);

  const peopleInRoomsByDay: SleepingSiteByDay[] = allSites.map(site => {
    const peopleInRoomFriday: Person[] = people.filter(p => p.sleeping.friday.site === site);
    const peopleInRoomSaturday: Person[] = people.filter(p => p.sleeping.saturday.site === site);
    const peopleInRoomSunday: Person[] = people.filter(p => p.sleeping.sunday.site === site);

    return {
      site: site,
      days: {
        friday: peopleInRoomFriday,
        saturday: peopleInRoomSaturday,
        sunday: peopleInRoomSunday,
      }
    }
  });

  return (
    <>
      <h2>Sleeping Arrangements by Site</h2>
      <SortableTable data={peopleInRoomsByDay} columns={columns} />
    </>
  )
}

export default SleepingArrangements