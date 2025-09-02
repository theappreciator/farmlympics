import React, { useState } from 'react'
import styles from './Groceries.module.css';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'

import type { GroceryToBuy } from './types';

type GroceriesProps = {
  items: GroceryToBuy[];
}

const Groceries: React.FC<GroceriesProps> = ({ items }) => {

  const [data, _setData] = useState(() => [...items]);

  const [sorting, setSorting] = React.useState<SortingState>([{id: 'name', desc: false }]);

  const columnHelper = createColumnHelper<GroceryToBuy>();

  const columns = [
    columnHelper.accessor('name', {
      header: () => <div style={{ textAlign: "left" }}>Item</div>,
      cell: info => <div style={{ textAlign: "left" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('owners', {
      header: () => <div style={{ textAlign: "left" }}>Owner</div>,
      cell: info => <div style={{ textAlign: "left" }}>{info.getValue().map(o => <div>{o.name}</div>)}</div>,
      sortingFn: (rowA, rowB, _) => rowA.original.owners[0]?.name.localeCompare(rowB.original.owners[0]?.name)
    }),
    columnHelper.accessor('day', {
      header: () => <span style={{ textAlign: "left" }}>Day</span>,
      cell: info => <span style={{ textAlign: "left" }}>{info.getValue()}</span>,
    }),
    columnHelper.accessor('sourceName', {
      header: () => <span style={{ textAlign: "left" }}>Event</span>,
      cell: info => <span style={{ textAlign: "left" }}>{info.getValue()}</span>,
    }),
    // columnHelper.accessor('preferredStore', {
    //   header: () => <span style={{ textAlign: "left" }}>Store</span>,
    //   cell: info => <span style={{ textAlign: "left" }}>{info.getValue()}</span>,
    // }),
    columnHelper.accessor('qty', {
      header: () => <div style={{ textAlign: "right" }}>Qty</div>,
      cell: info => <div style={{ textAlign: "right" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('percentUsed', {
      header: () => <div style={{ textAlign: "right" }}>% Used</div>,
      cell: info => <div style={{ textAlign: "right" }}>{info.getValue() !== undefined ? info.getValue() + "%" : ""}</div>,
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    // initialState: {
    //   sorting: [
    //     {
    //       id: 'name',
    //       desc: false, // sort by name in descending order by default
    //     },
    //   ],
    // },
  });

  return (
    <div className={styles.container}>
      <h2>Groceries</h2>
      <table className={styles.container}>
        <thead className={styles.header}>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <span
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
                    </span>
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
                <td key={row.id + "___" + cell.id + "000"} style={{verticalAlign: "top"}}>
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
    </div>
  )
}

export default Groceries;