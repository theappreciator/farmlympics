import React from 'react'
import styles from './SleepingArrangements.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'
import { RoomsAndSites } from '../data/peeps';
import type { Person } from '../types';

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

  const [data, _setData] = React.useState(() => [...peopleInRoomsByDay])

  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
        sorting,
    },
  });

  return (
    <>
      <h2>Sleeping Arrangements by Site</h2>
      <table className={styles.container}>
          <thead className={styles.header}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={
                          header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : ''
                        }
                        onClick={header.column.getToggleSortingHandler()}
                        title={
                          header.column.getCanSort()
                            ? header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                                ? 'Sort descending'
                                : 'Clear sort'
                            : undefined
                        }
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: ' 🔼',
                          desc: ' 🔽',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot className={styles.footer}>
            {table.getFooterGroups().map(footerGroup => (
              <tr key={footerGroup.id}>  
                {footerGroup.headers.map(header => (
                  <th key={header.id} className={styles.footer}>
                    {flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
    </>
  )
}

export default SleepingArrangements