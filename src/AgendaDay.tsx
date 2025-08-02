import React from 'react'
import styles from './AgendaDay.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type CellContext,
} from '@tanstack/react-table'

import type { Days, Event } from './Agenda'
import type { GameEvent } from './games';

type AgendaDayProps = {
  day: Days,
  agenda: Event[]
};

export const timeDisplay = (time: number, displayType: "long" | "short" = "long"): string => {
  switch (time) {
    case 0: {
      return "all";
    }
    case 1: {
      return "AM";
    }
    case 2: {
      return "PM";
    }
    default: {
      let hundreds = Math.floor(time / 100);
      let tens = ((time - (hundreds * 100)) / 100) * 60;
      const amPm = hundreds >= 13 ? "pm" : "am";
      let hours = hundreds >= 13 ? hundreds - 12 : hundreds;
      let mintues = tens < 10 ? `0${tens}` : tens;
  
      if (displayType === "long") {
        return `${hours}:${mintues}${amPm}`;
      }
      else {
        return `${mintues} min`;
      }
    }
  }
}

const activityDisplay = (info: CellContext<Event, string[] | GameEvent | React.ReactNode>) => {
  const value = info.getValue();

  if (Array.isArray(value)) {
    return (value as string[]).map((l, i) => 
        <div key={i} style={{textAlign: "left"}}>
          {l}
        </div>
    );
  }
  else if (React.isValidElement(value)) {
    return value;
  }
  else {
    const gameEvent = (value as GameEvent);
    return (
      <div style={{textAlign: "left"}}>
        <div style={{fontWeight: "700"}}>
          Game #{gameEvent.order}: {gameEvent.game.name} ({timeDisplay(gameEvent.playTime, "short")})
        </div>
        <div>
          * location: {gameEvent.location}
        </div>
      </div>
    )
  }
}

const columnHelper = createColumnHelper<Event>()

const columns = [
  columnHelper.accessor('start', {
    header: () => <span>Time</span>,
    cell: info => timeDisplay(info.getValue())
  }),
  columnHelper.accessor('lines', {
    header: () => <div style={{textAlign: "left"}}>Activity</div>,
    cell: activityDisplay,
  }),
]

const AgendaDay: React.FC<AgendaDayProps> = ({ day, agenda }) => {

  const [data, _setData] = React.useState(() => [...agenda])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
    {data.length > 0 && (
      <>
      <h2>Agenda: {day}</h2>
        <table className={styles.container}>
          <thead className={styles.header}>
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

export default AgendaDay