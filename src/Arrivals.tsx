import React from 'react'
import styles from './Arrivals.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { format } from 'date-fns';
import { Days } from './Agenda';
import type { Person } from './peeps';

type ArrivalsProps = {
  people: Person[]
};

const columnHelper = createColumnHelper<ArrivalsByDay>()

const columns = [
  columnHelper.accessor('person.name', {
    header: () => <span>Name</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('days.friday', {
    header: () => <div style={{textAlign: "left"}}>Friday</div>,
    cell: info => info.getValue(),
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => r.original.days.friday !== undefined).length} people`
  }),
  columnHelper.accessor('days.saturday', {
    header: () => <div style={{textAlign: "left"}}>Saturday</div>,
    cell: info => info.getValue(),
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => r.original.days.saturday !== undefined).length} people`
  }),
  columnHelper.accessor('days.sunday', {
    header: () => <div style={{textAlign: "left"}}>Sunday</div>,
    cell: info => info.getValue(),
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => r.original.days.sunday !== undefined).length} people`
  }),
  columnHelper.accessor('days.monday', {
    header: () => <div style={{textAlign: "left"}}>Monday</div>,
    cell: info => info.getValue(),
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => r.original.days.monday !== undefined).length} people`
  }),
]

type ArrivalsByDay = {
    person: Person
    days: {
      friday?: string
      saturday?: string
      sunday?: string
      monday?: string
    }
}

const arrivalHelper = (day: Days, arrivalDate?: Date | 'all', departDate?: Date | 'all'): string | undefined => {
  if (!arrivalDate || !departDate) return undefined;
   
  if (arrivalDate === 'all') return arrivalDate;

  let arriveToday = false;
  let departToday = false;
  let arrivedBeforeToday = false;
  let departedBeforeToday = false;

  let dayAfter, dayOf;

  if (day === Days.Friday) {
    dayAfter = new Date('2025-08-30T00:00:00');
    dayOf = new Date('2025-08-29T00:00:00');
  }
  else if (day === Days.Saturday) {
    dayAfter = new Date('2025-08-31T00:00:00');
    dayOf = new Date('2025-08-30T00:00:00');
  }
  else if (day === Days.Sunday) {
    dayAfter = new Date('2025-09-01T00:00:00');
    dayOf = new Date('2025-08-31T00:00:00');
  }
  else {
    dayAfter = new Date('2025-09-02T00:00:00');
    dayOf = new Date('2025-09-01T00:00:00');
  }

  if (arrivalDate < dayAfter) {
    if (arrivalDate >= dayOf) {
      arriveToday = true;
    }
    if (departDate < dayAfter && departDate >= dayOf) {
      departToday = true;
    }
  }

  if (arrivalDate < dayOf && !arriveToday && !departToday) {
    arrivedBeforeToday = true;
  }
  if (departDate < dayOf) {
    departedBeforeToday = true;
  }

  let arrivalString = '';

  if (arrivedBeforeToday && !departedBeforeToday) {
    arrivalString += 'all';
  }
  if (arriveToday) {
    arrivalString += format(arrivalDate, 'haaaaa');
  }
  if (departToday) {
    if (arrivalString) {
      arrivalString += ' - ';
    }
    arrivalString += format(departDate, 'haaaaa');
  }

  if (arrivalString === '') {
    arrivalString = '༚';
  }

  return arrivalString ? arrivalString : undefined;
}

const Arrivals: React.FC<ArrivalsProps> = ({ people }) => {

  const arrivalsByDay: ArrivalsByDay[] = people.map(person => {

    const friday = arrivalHelper(Days.Friday, person.arrival, person.departure);
    const saturday = arrivalHelper(Days.Saturday, person.arrival, person.departure);
    const sunday = arrivalHelper(Days.Sunday, person.arrival, person.departure);
    const monday = arrivalHelper(Days.Monday, person.arrival, person.departure);

    return {
      person,
      days: {
        friday,
        saturday,
        sunday,
        monday
      }
    }
  });

  const [data, _setData] = React.useState(() => [...arrivalsByDay])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
    {data.length > 0 && (
      <>
      <h2>Arrivals by Day</h2>
        <table className={styles.container}>
          <thead className={styles.header}>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
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
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </>
    )}
    </>
  )
}

export default Arrivals