import React from 'react'
import styles from './Arrivals.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

// import { Days } from './Agenda';
import type { Person } from '../types';
import { arrivalHelper } from '../helpers/arrivalHelper';


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
    header: () => <div style={{textAlign: "center"}}>Friday</div>,
    cell: info => info.getValue(),
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => r.original.days.friday !== undefined).length} people`
  }),
  columnHelper.accessor('days.saturday', {
    header: () => <div style={{textAlign: "center"}}>Saturday</div>,
    cell: info => info.getValue(),
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => r.original.days.saturday !== undefined).length} people`
  }),
  columnHelper.accessor('days.sunday', {
    header: () => <div style={{textAlign: "center"}}>Sunday</div>,
    cell: info => info.getValue(),
    footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => r.original.days.sunday !== undefined).length} people`
  }),
  columnHelper.accessor('days.monday', {
    header: () => <div style={{textAlign: "center"}}>Monday</div>,
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

const Arrivals: React.FC<ArrivalsProps> = ({ people }) => {

  const arrivalsByDay: ArrivalsByDay[] = people.map(person => {

    const friday = arrivalHelper("Friday", person.arrival, person.departure);
    const saturday = arrivalHelper("Saturday", person.arrival, person.departure);
    const sunday = arrivalHelper("Sunday", person.arrival, person.departure);
    const monday = arrivalHelper("Monday", person.arrival, person.departure);

    return {
      person,
      days: {
        friday: friday?.arrivalString,
        saturday: saturday?.arrivalString,
        sunday: sunday?.arrivalString,
        monday: monday?.arrivalString,
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