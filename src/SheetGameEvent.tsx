import React, { useState } from 'react'
import styles from './SheetGameEvent.module.css';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from '@tanstack/react-table'

import type { Grocery, GameEvent } from './types';

export type SheetGameEventProps = {
  gameEvent: GameEvent;
};

const SheetGameEvent: React.FC<SheetGameEventProps> = ({ gameEvent }) => {

  const [data, _setData] = useState(() => [...gameEvent.items]);

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
      <h2>Game: {gameEvent?.game.name}</h2>
      <h3>What is it?</h3>
      <ul><li>{gameEvent?.game.what}</li></ul>
      <h3>How to win?</h3>
      <ul><li>{gameEvent?.game.winning}</li></ul>
      <h3>How to Play:</h3>
      <ul>
        {gameEvent?.game.how?.map(h => {
          if (Array.isArray(h)) {
            return (
              <ul>
                {h.map(sh => (
                  <li>{sh}</li>
                ))}
              </ul>
            )
          }
          else {
            return (
              <li>{h}</li>
            )
          }
        })}
      </ul>
      <h3>Rules:</h3>
      <ul>
        {gameEvent?.game.rules?.map(r => {
          if (Array.isArray(r)) {
            return (
              <ul>
                {r.map(sr => (
                  <li>{sr}</li>
                ))}
              </ul>
            )
          }
          else {
            return (
              <li>{r}</li>
            )
          }
        })}
      </ul>
      <h3>Setup:</h3>
      <ul>
        {gameEvent?.game.setup?.map(s => (
          <li>{s}</li>
        ))}
      </ul>
      <h3>Time:</h3>
      <ul>
        {gameEvent?.game.time?.map(t => (
          <li>{t}</li>
        ))}
      </ul>
      <h3>Items to Bring/Purchase:</h3>
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
      <hr />
      <div>
        <h3>General Definitions</h3>
        <br />
        <div>
          <span className={styles.title}>On Team</span>: <span>The team is actively participating in the current round, ie: playing now</span>
        </div>
        <div>
          <span className={styles.title}>Off Team</span>: <span>The team not actively participating in ths current round, ie: not playing now</span>
        </div>
        <div>
          <span className={styles.title}>Home Base</span>: <span>Team neutral, safe location for teams to congregate and recieve instructions</span>
        </div>
        <div>
          <span className={styles.title}>Round</span>: <span>The completion of the activity for the specified group of people</span>
        </div>
        <div>
          <span className={styles.title}>Wave</span>: <span>A smaller activity within a round</span>
        </div>
        <br />
      </div>
    </>
  )
}

export default SheetGameEvent;