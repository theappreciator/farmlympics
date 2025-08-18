import React, { useState } from 'react'
import { Sheet } from 'react-modal-sheet';
import styles from './AgendaDay.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type CellContext,
} from '@tanstack/react-table'

import useEscapeKey from './hooks/useEscPress';
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

const activityDisplay = (info: CellContext<Event, string[] | GameEvent | React.ReactNode>, dispatcher: React.Dispatch<React.SetStateAction<GameEvent | undefined>>) => {
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
          Game #{gameEvent.order}: {gameEvent.game.name} ({timeDisplay(gameEvent.playTime, "short")}) <a onClick={() => dispatcher(gameEvent)}>Rules</a>
        </div>
        <div>
          * tagline: {gameEvent.intro}
        </div>
        <div>
          * location: {gameEvent.location}
        </div>
      </div>
    )
  }
}

const snapPoints = [1, -300, 0.3, 0];
const initialSnap = 0; // Initial snap point when sheet is opened

const AgendaDay: React.FC<AgendaDayProps> = ({ day, agenda }) => {

  const [data, _setData] = useState(() => [...agenda])
  // const [isOpen, setOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<GameEvent>();

  const columnHelper = createColumnHelper<Event>()

  useEscapeKey(() => {
    if (selectedGame) {
      setSelectedGame(undefined);
    }
  });

  const columns = [
    columnHelper.accessor('start', {
      header: () => <span>Time</span>,
      cell: info => timeDisplay(info.getValue())
    }),
    columnHelper.accessor('lines', {
      header: () => <div style={{textAlign: "left"}}>Activity</div>,
      cell: info => activityDisplay(info, setSelectedGame),
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
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

          <Sheet
            isOpen={selectedGame !== undefined}
            onClose={() => setSelectedGame(undefined)}
            snapPoints={snapPoints}
            initialSnap={initialSnap}
            >
            <Sheet.Container className={styles.sheetContainer}>
              <Sheet.Header />
              <Sheet.Content className={styles.sheetContent}>
                <Sheet.Scroller>
                  <h2>Game: {selectedGame?.game.name}</h2>
                  <h3>What is it?:</h3>
                  <ul><li>{selectedGame?.what}</li></ul>
                  <h3>How to win?:</h3>
                  <ul><li>{selectedGame?.winning}</li></ul>
                  <h3>How to Play:</h3>
                  <ul>
                    {selectedGame?.how?.map(h => (
                      <li>{h}</li>
                    ))}
                  </ul>
                  <h3>Rules:</h3>
                  <ul>
                    {selectedGame?.rules?.map(r => (
                      <li>{r}</li>
                    ))}
                  </ul>
                  <h3>Setup:</h3>
                  <ul>
                    {selectedGame?.setup?.map(s => (
                      <li>{s}</li>
                    ))}
                  </ul>
                </Sheet.Scroller>
              </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop onTap={() => setSelectedGame(undefined)}/>
          </Sheet>
        </>
      )}
    </div>
  )
}

export default AgendaDay