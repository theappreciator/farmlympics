import React from 'react'
import styles from './PeopleTable.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'
import { format } from 'date-fns'

import type { Person } from './App'
import { emptyHelper, sleepingDisplay } from './helpers/tableUtility';

type PeopleTableProps = {
  people: Person[];
};

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('id', {
    header: () => <span>#</span>,
    cell: info => info.row.index + 1,
  }),
  columnHelper.accessor('name', {
    header: () => <div style={{textAlign: "left"}}>Name</div>,
    cell: info => <div style={{textAlign: "left"}}>{info.getValue()}</div>,
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
  columnHelper.accessor('arrival', {
    header: () => <span>Arrive</span>,
    cell: info => {
      const value = info.getValue()
      return value ? format(new Date(value), 'eee, haaaaa') : '?'
    }
  }),
  columnHelper.accessor('departure', {
    header: () => <span>Depart</span>,
    cell: info => {
      const value = info.getValue()
      return value ? format(new Date(value), 'eee, haaaaa') : '?'
    }
  }),
  columnHelper.accessor('sleeping.friday', {
    header: () => <span>Friday</span>,
    cell: info => sleepingDisplay(info.getValue()),
  }),
  columnHelper.accessor('sleeping.saturday', {
    header: () => <span>Saturday</span>,
    cell: info => sleepingDisplay(info.getValue()),
  }),
  columnHelper.accessor('sleeping.sunday', {
    header: () => <span>Sunday</span>,
    cell: info => sleepingDisplay(info.getValue()),
  }),
]

const PeopleTable: React.FC<PeopleTableProps> = ({ people }) => {

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
      <h2>PEOPLE</h2>
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
        </table>
      </>
    )}
    </>
  )
}

export default PeopleTable