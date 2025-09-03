import React, { useState } from 'react'
import styles from './SortableTable.module.css';

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type SortingState,
} from '@tanstack/react-table'

export type SortableTableProps<T> = {
  data: T[];
  columns: ColumnDef<T, any>[];
};

const SortableTable = <T extends object>({ data, columns }: SortableTableProps<T>) => {

  const [stateData, _setStateData] = useState(() => [...data || []]);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data: stateData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
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
                        ? styles.cursorPointer
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
              <td key={row.id + "___" + cell.id + "000"}>
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
  )
}

export default SortableTable;