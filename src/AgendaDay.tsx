import React, { useState } from 'react'
import { Sheet } from 'react-modal-sheet';
import styles from './AgendaDay.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type CellContext,
  type SortingState,
} from '@tanstack/react-table'

import useEscapeKey from './hooks/useEscPress';
import type { Days, Event } from './Agenda'
import type { GameEvent } from './games';
import type { FoodEvent } from './food';
import type { Grocery } from './food';

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

type GameNameHeadingProps = {
  gameEvent: GameEvent;
  dispatcher: React.Dispatch<React.SetStateAction<GameEvent | FoodEvent | undefined>>;
};

const GameNameHeading: React.FC<GameNameHeadingProps> = ({ gameEvent, dispatcher }) => {
  return (
    <div style={{ fontWeight: "700" }}>
      Game #{gameEvent.order}: {gameEvent.game.name} ({timeDisplay(gameEvent.playTime, "short")}) <a onClick={() => dispatcher(gameEvent)}>Rules</a>
    </div>
  );
};

const activityDisplay = (info: CellContext<Event, string[] | GameEvent | FoodEvent | React.ReactNode>, dispatcher: React.Dispatch<React.SetStateAction<GameEvent | FoodEvent | undefined>>) => {
  const value = info.getValue();

  if (Array.isArray(value)) { // it's string[]
    return (value as string[]).map((l, i) =>
      <div key={i} style={{ textAlign: "left" }}>
        {l}
      </div>
    );
  }
  else if (React.isValidElement(value)) { // it's a React UI Element
    return value;
  }
  else { // it's a custom type with a 'kind' key
    switch ((value as { kind: string }).kind) {
      case "GameEvent":
        const gameEvent = (value as GameEvent);
        return (
          <div style={{ textAlign: "left" }}>
            <GameNameHeading gameEvent={gameEvent} dispatcher={dispatcher} />
            <div style={{ fontStyle: "italic" }}>
              {gameEvent.game.intro}
            </div>
            <div>
              location → {gameEvent.location}
            </div>
          </div>
        )
        break;
      case "FoodEvent":
        const foodEvent = (value as FoodEvent);
        return (
          <div style={{ textAlign: "left" }}>
            {foodEvent.name} {foodEvent.groceries.length > 0 && (<a onClick={() => dispatcher(foodEvent)}>Grocery List</a>)}
            {foodEvent.info.length > 0 && (
              <div>
                <div style={{ fontStyle: "italic" }}>Info</div>
                <ul style={{ marginTop: 0 }}>
                  {foodEvent.info.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
            )}
            {foodEvent.menu.length > 0 && (
              <div>
                {foodEvent.info.length > 0 && (<div style={{ fontStyle: "italic" }}>Menu</div>)}
                <ul style={{ marginTop: 0 }}>
                  {foodEvent.menu.map(m => (
                    <li>{m.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      default:
        return "";
        break;
    }
  }
}

type SheetGameEventProps = {
  gameEvent: GameEvent;
};

const SheetGameEvent: React.FC<SheetGameEventProps> = ({ gameEvent }) => {
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
      <hr />
      <div>
        <h3>General Definitions</h3>
        <br />
        <div>
          <span style={{ fontWeight: 700 }}>On Team</span>: <span>The team is actively participating in the current round, ie: playing now</span>
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Off Team</span>: <span>The team not actively participating in ths current round, ie: not playing now</span>
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Home Base</span>: <span>Team neutral, safe location for teams to congregate and recieve instructions</span>
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Round</span>: <span>The completion of the activity for the specified group of people</span>
        </div>
        <div>
          <span style={{ fontWeight: 700 }}>Wave</span>: <span>A smaller activity within a round</span>
        </div>
        <br />
      </div>
    </>
  )
}

type SheetFoodEventProps = {
  foodEvent: FoodEvent;
};

const SheetFoodEvent: React.FC<SheetFoodEventProps> = ({ foodEvent }) => {

  const [data, _setData] = useState(() => [...foodEvent.groceries]);

  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columnHelper = createColumnHelper<Grocery>()

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
  })

  return (
    <>
      <h2>Meal: {foodEvent.day} - {foodEvent.name}</h2>
      <h3>Menu:</h3>
      <ul>
        {foodEvent?.menu.map(m => {
          if (Array.isArray(m)) {
            return (
              <ul>
                {m.map(sm => (
                  <li>{sm.name}</li>
                ))}
              </ul>
            )
          }
          else {
            return (
              <li>{m.name}</li>
            )
          }
        })}
      </ul>
      <br/>
      <h3>Groceries:</h3>
      <br/>
      <table className={styles.sheetTableContainer}>
          <thead className={styles.sheetTableHeader}>
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
                  <td key={row.id+"___"+cell.id+"000"}>
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
    </>
  )
}

const snapPoints = [1, -300, 0.3, 0];
const initialSnap = 0; // Initial snap point when sheet is opened

const AgendaDay: React.FC<AgendaDayProps> = ({ day, agenda }) => {

  const [data, _setData] = useState(() => [...agenda])
  // const [isOpen, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<GameEvent | FoodEvent>();

  const columnHelper = createColumnHelper<Event>()

  useEscapeKey(() => {
    if (selectedEvent) {
      setSelectedEvent(undefined);
    }
  });

  const columns = [
    columnHelper.accessor('start', {
      header: () => <span>Time</span>,
      cell: info => timeDisplay(info.getValue())
    }),
    columnHelper.accessor('lines', {
      header: () => <div style={{ textAlign: "left" }}>Activity</div>,
      cell: info => activityDisplay(info, setSelectedEvent),
    }),
  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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
            isOpen={selectedEvent !== undefined}
            onClose={() => setSelectedEvent(undefined)}
            snapPoints={snapPoints}
            initialSnap={initialSnap}
          >
            <Sheet.Container className={styles.sheetContainer}>
              <Sheet.Header />
              <Sheet.Content className={styles.sheetContent}>
                <Sheet.Scroller>
                  {selectedEvent?.kind === "GameEvent" && (
                    <SheetGameEvent gameEvent={selectedEvent} />
                  )}
                  {selectedEvent?.kind === "FoodEvent" && (
                    <SheetFoodEvent foodEvent={selectedEvent} />
                  )}
                </Sheet.Scroller>
              </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop onTap={() => setSelectedEvent(undefined)} />
          </Sheet>
        </>
      )}
    </div>
  )
}

export default AgendaDay