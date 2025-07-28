import React from 'react'
import './TeamTable.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import type { Person, Sleeping, Teams } from './App'

type TeamTableProps = {
  team: Teams;
  people: Person[];
};

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('name', {
    header: () => <span>Name</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('generation', {
    header: () => <span>Generation</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('team', {
    header: () => <span>Team</span>,
    cell: info => info.getValue(),
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

const sleepingDisplay = (sleeping: Sleeping) => {
  if (sleeping === undefined) {
    return "?"
  }
  
  return sleeping;
}

const TeamTable: React.FC<TeamTableProps> = ({ team, people }) => {

  const [data, _setData] = React.useState(() => [...people])
  // const rerender = React.useReducer(() => ({}), {})[1]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
    {people.length > 0 && (
      <>
      <div>TEAM {team}</div>
        <table>
          <thead>
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

export default TeamTable