import React, { useState } from 'react'
import styles from './SheetFoodEvent.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'

import type { GeneralEvent, Grocery } from './types';

import allPeople from './data/peeps';

import ArrivalsForFood from './ArrivalsForFood';

export type SheetGeneralEventProps = {
  generalEvent: GeneralEvent;
};

const SheetGeneralEvent: React.FC<SheetGeneralEventProps> = ({ generalEvent }) => {

  const [data, _setData] = useState(() => [...generalEvent.items]);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columnHelper = createColumnHelper<Grocery>();

  const columns = [
    columnHelper.accessor('name', {
      header: () => <div style={{ textAlign: "left" }}>Item</div>,
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('preferredStore', {
      header: () => <div style={{ textAlign: "center" }}>Store</div>,
      cell: info => <div style={{ textAlign: "center" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('qty', {
      header: () => <div style={{ textAlign: "right" }}>Qty</div>,
      cell: info => <div style={{ textAlign: "right" }}>{info.getValue()}</div>,
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
  });

  return (
    <>
      <h2>{generalEvent.day} - {generalEvent.name}</h2>
      <h3>Info</h3>
      <ul>
        {generalEvent?.info.map(i => {
          if (Array.isArray(i)) {
            return (
              <ul>
                {i.map(si => (
                  <li>{si}</li>
                ))}
              </ul>
            )
          }
          else {
            return (
              <li>{i}</li>
            )
          }
        })}
      </ul>
      <h3>Purchase List:</h3>
      <br />
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
      <br/>
      <ArrivalsForFood people={allPeople} day={generalEvent.day} meal={'Other'} />
      <br/>
    </>
  )
}

export default SheetGeneralEvent;