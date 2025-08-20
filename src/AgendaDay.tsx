import React, { useState } from 'react'
import { Sheet } from 'react-modal-sheet';
import styles from './AgendaDay.module.css'
import { DayNames } from './types';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type CellContext,
} from '@tanstack/react-table'

import useEscapeKey from './hooks/useEscPress';
import type { BaseEvent, GameEvent, FoodEvent, GeneralEvent, DayName, EventInstance } from './types';

import SheetGameEvent from './SheetGameEvent';
import SheetFoodEvent from './SheetFoodEvent';
import SheetGeneralEvent from './SheetGeneralEvent';

type AgendaDayProps = {
  day: DayName,
  agenda: EventInstance[]
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
  dispatcher: React.Dispatch<React.SetStateAction<BaseEvent | GameEvent | undefined>>;
};

const GameNameHeading: React.FC<GameNameHeadingProps> = ({ gameEvent, dispatcher }) => {
  return (
    <div style={{ fontWeight: "700" }}>
      Game #{gameEvent.order}: {gameEvent.game.name} ({timeDisplay(gameEvent.playTime, "short")}) <a onClick={() => dispatcher(gameEvent)}>Rules</a>
    </div>
  );
};

const activityDisplay = (info: CellContext<EventInstance, string[] | BaseEvent | GameEvent | React.ReactNode>, dispatcher: React.Dispatch<React.SetStateAction<BaseEvent | GameEvent | undefined>>) => {
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
            {foodEvent.name} {foodEvent.items.length > 0 && (<a onClick={() => dispatcher(foodEvent)}>Detail</a>)}
            {foodEvent.info.length > 0 && (
              <div>
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
        const generalEvent = (value as GeneralEvent);
        return (
          <div style={{ textAlign: "left" }}>
            {generalEvent.name} {generalEvent.items.length > 0 && (<a onClick={() => dispatcher(generalEvent)}>Detail</a>)}
            {generalEvent.info.length > 0 && (
              <div>
                <ul style={{ marginTop: 0 }}>
                  {generalEvent.info.map(i => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
        return "";
        break;
    }
  }
}

const snapPoints = [1, -300, 0.3, 0];
const initialSnap = 0; // Initial snap point when sheet is opened

const AgendaDay: React.FC<AgendaDayProps> = ({ day, agenda }) => {

  const [data, _setData] = useState(() => [...agenda])
  // const [isOpen, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<BaseEvent | GameEvent>();

  const columnHelper = createColumnHelper<EventInstance>()

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
          <h2>Agenda: {DayNames[day]}</h2>
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
                    <SheetGameEvent gameEvent={selectedEvent as GameEvent} />
                  )}
                  {selectedEvent?.kind === "FoodEvent" && (
                    <SheetFoodEvent foodEvent={selectedEvent as FoodEvent} />
                  )}
                  {selectedEvent?.kind === "GeneralEvent" && (
                    <SheetGeneralEvent generalEvent={selectedEvent as GeneralEvent} />
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