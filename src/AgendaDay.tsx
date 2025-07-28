import React from 'react'
import styles from './AgendaDay.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import type { Days, Event } from './Agenda'

type AgendaDayProps = {
  day: Days,
  agenda: Event[]
};

const columnHelper = createColumnHelper<Event>()

const columns = [
  columnHelper.accessor('start', {
    header: () => <span>Time</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('lines', {
    header: () => <div style={{textAlign: "left"}}>Activity</div>,
    cell: info => info.getValue().map((l, i) => 
      <div key={i} style={{textAlign: "left"}}>
        {l}
      </div>
    ),
  }),
]

const AgendaDay: React.FC<AgendaDayProps> = ({ day, agenda }) => {

  const [data, _setData] = React.useState(() => [...agenda])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
    {data.length > 0 && (
      <>
      <h2>Agenda: {day}</h2>
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
          
        </table>
      </>
    )}
    </>
  )
}

export default AgendaDay