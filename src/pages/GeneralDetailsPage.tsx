import React, { useState } from 'react'
import styles from './GeneralDetailsPage.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'

import type { GeneralEvent, Grocery } from '../types';

import allPeople from '../data/peeps';
import allEvents from '../data/generalEvents';

import ArrivalsForFood from '../components/ArrivalsForFood';

export type GeneralDetailsPageProps = {
  eventId?: string
  generalEvent?: GeneralEvent;
};

const GeneralDetailsPage: React.FC<GeneralDetailsPageProps> = ({ eventId }) => {

  const foundEvent = allEvents.find(e => e.id === eventId);

  const [data, _setData] = useState(() => [...foundEvent?.items || []]);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columnHelper = createColumnHelper<Grocery>();

  const columns = [
    columnHelper.accessor('name', {
      header: () => <div style={{ textAlign: "left" }}>Item</div>,
      cell: info => <div style={{ textAlign: "left" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('preferredStore', {
      header: () => <span style={{ textAlign: "center" }}>Store</span>,
      cell: info => <div style={{ textAlign: "center" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('qty', {
      header: () => <span style={{ textAlign: "right" }}>Qty</span>,
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
      {!foundEvent && <div>Event not found: {eventId}</div>}
      {foundEvent && (
        <>
          <h2>{foundEvent.day} - {foundEvent.name}</h2>
          <h3>Info</h3>
          <ul>
            {foundEvent?.info.map(i => {
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
          <h3>Purchase List</h3>
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
          <ArrivalsForFood people={allPeople} day={foundEvent.day} meal={'Other'} />
          <br/>
        </>
      )}
    </>
  )
}

export default GeneralDetailsPage;