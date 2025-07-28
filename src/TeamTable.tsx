import React from 'react'
import styles from './TeamTable.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'

import type { Person, Shirt, Sleeping, Teams } from './App'

type TeamTableProps = {
  team: Teams;
  people: Person[];
};

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('id', {
    header: () => <span>#</span>,
    cell: info => info.row.index + 1,
    footer: info => info.table.getRowModel().rows.length,
  }),
  columnHelper.accessor('name', {
    header: () => <span>Name</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('generation', {
    header: () => <span>Generation</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('shirt', {
    header: () => <span>Shirt</span>,
    cell: info => emptyHelper(info.getValue()),
  }),
  columnHelper.accessor('team', {
    header: () => <span>Team</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('sleeping.friday', {
    header: () => <span>Friday</span>,
    cell: info => sleepingDisplay(info.getValue()),
    footer: info => info.table.getRowModel().rows.filter(r => ![undefined, "none", "Nana J's"].includes(r.original.sleeping.friday)).length,
  }),
  columnHelper.accessor('sleeping.saturday', {
    header: () => <span>Saturday</span>,
    cell: info => sleepingDisplay(info.getValue()),
    footer: info => info.table.getRowModel().rows.filter(r => ![undefined, "none", "Nana J's"].includes(r.original.sleeping.saturday)).length,
  }),
  columnHelper.accessor('sleeping.sunday', {
    header: () => <span>Sunday</span>,
    cell: info => sleepingDisplay(info.getValue()),
    footer: info => info.table.getRowModel().rows.filter(r => ![undefined, "none", "Nana J's"].includes(r.original.sleeping.sunday)).length,
  }),
]

const sleepingDisplay = (sleeping: Sleeping) => {
  if (sleeping === undefined) {
    return "?";
  }
  else if (sleeping === "none") {
    return "no";
  }
  
  return sleeping;
}

const emptyHelper = (value: Shirt) => {
  if (value === undefined || typeof value === 'undefined') {
    return "?";
  }
  
  return value;
}

const TeamTable: React.FC<TeamTableProps> = ({ team, people }) => {

  const [data, _setData] = React.useState(() => [...people])

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
  })

  return (
    <>
    {data.length > 0 && (
      <>
      <h2>TEAM {team}</h2>
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
                  <td key={header.id} className={styles.footer}>
                    {flexRender(
                      header.column.columnDef.footer,
                      header.getContext(),
                    )}
                  </td>
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

export default TeamTable