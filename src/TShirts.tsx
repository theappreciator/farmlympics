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

import { Teams, type Person, type Shirt } from './peeps';

type TShirtsCountBySize = {
  shirt: Shirt;
  teamA: Person[],
  teamB: Person[],
  unk: Person[],
}

type TShirtsProps = {
    people: Person[];
};

const columnHelper = createColumnHelper<TShirtsCountBySize>()

const columns = [
  columnHelper.accessor('shirt', {
    header: () => <span>Shirt Size</span>,
    cell: info => info.getValue().display,
    id: "shirt-name"
  }),
  columnHelper.accessor('shirt', {
    header: () => <span>Shirt Size</span>,
    cell: info => info.getValue().code,
    id: "shirt-code"
  }),
  columnHelper.accessor('teamA', {
    header: () => <span>Team A</span>,
    cell: info => info.getValue().length,
    footer: info => `Team A: ${info.table.getFilteredRowModel().rows.map(r => r.original.teamA.length).reduce((acc, val) => acc + val, 0)} shirts`
  }),
  columnHelper.accessor('teamB', {
    header: () => <span>Team B</span>,
    cell: info => info.getValue().length,
    footer: info => `Team B: ${info.table.getFilteredRowModel().rows.map(r => r.original.teamB.length).reduce((acc, val) => acc + val, 0)} shirts`
  }),
  columnHelper.accessor('unk', {
    header: () => <span>?</span>,
    cell: info => info.getValue().length,
    footer: info => `TBD: ${info.table.getFilteredRowModel().rows.map(r => r.original.unk.length).reduce((acc, val) => acc + val, 0)} shirts`
  }),
]

const TShirts: React.FC<TShirtsProps> = ({ people }) => {

  const shirtsBySize: TShirtsCountBySize[] = [];
  
  people.forEach(p => {

    let shirtBySize = shirtsBySize.find(s => s.shirt.code === p.shirt.code);
    if (!shirtBySize) {
        shirtBySize = {
            shirt: p.shirt,
            teamA: [],
            teamB: [],
            unk: [],
        };
        shirtsBySize.push(shirtBySize);
    }

    switch (p.team.name) {
        case Teams.TeamAMain.name:
            shirtBySize.teamA.push(p);
            break;
        case Teams.TeamBMain.name:
            shirtBySize.teamB.push(p);
            break;
        default:
            shirtBySize.unk.push(p);
            break;
    }

  });

  const sortedShirtsBySize = shirtsBySize.sort((a, b) => a.shirt.order - b.shirt.order);

  const [data, _setData] = React.useState(() => [...sortedShirtsBySize])

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
      <h2>Shirt Size Count</h2>
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

export default TShirts;