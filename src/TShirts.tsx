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

import { type Person, type Shirt } from './peeps';

type TShirtsCountBySize = {
  shirt: Shirt;
  people: Person[]
}

type TShirtsProps = {
    people: Person[];
};

const columnHelper = createColumnHelper<TShirtsCountBySize>()

const columns = [
  columnHelper.accessor('shirt', {
    header: () => <span>Shirt Size</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('people', {
    header: () => <span>Count</span>,
    cell: info => info.getValue().length,
    // footer: info => `Total: ${info.table.getFilteredRowModel().rows.filter(r => !['?', 'no need'].includes(r.original.room.name)).map(r => r.original.days.friday).map(p => p.length).reduce((acc, val) => acc + val, 0)} people`
  })
]

const TShirts: React.FC<TShirtsProps> = ({ people }) => {

  const shirtsBySize: TShirtsCountBySize[] = Array.from(new Set(people.filter(p => p.shirt).map(people => people.shirt))).map(s => {
    return {
        shirt: s,
        people: people.filter(p => p.shirt === s)
    }
  }).sort((a, b) => (a.shirt as string).localeCompare((b.shirt as string)));

  const [data, _setData] = React.useState(() => [...shirtsBySize])

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