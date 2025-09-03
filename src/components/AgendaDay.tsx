import React from 'react'
// import styles from './AgendaDay.module.css'
import { DayNames } from '../types';

import {
  createColumnHelper,
  type CellContext,
} from '@tanstack/react-table'

import type { BaseEvent, GameEvent, FoodEvent, GeneralEvent, DayName, EventInstance } from '../types';
import SortableTable from './SortableTable';

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
      const amPm = hundreds >= 12 ? "pm" : "am";
      let hours = hundreds > 12 ? hundreds - 12 : hundreds;
      let minutes = tens < 10 ? `0${tens}` : tens;

      if (displayType === "long") {
        return `${hours}:${minutes}${amPm}`;
      }
      else {
        return `${minutes} min`;
      }
    }
  }
}

type GameNameHeadingProps = {
  gameEvent: GameEvent;
};

const GameNameHeading: React.FC<GameNameHeadingProps> = ({ gameEvent }) => {
  return (
    <div style={{ fontWeight: "700" }}>
      Game #{gameEvent.order}: {gameEvent.game.name} ({timeDisplay(gameEvent.playTime, "short")}) (<a href={`#/game-details?id=${gameEvent.game.id}`}>Detail</a>)
    </div>
  );
};

const activityDisplay = (info: CellContext<EventInstance, string[] | BaseEvent | GameEvent | React.ReactNode>) => {
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
            <GameNameHeading gameEvent={gameEvent} />
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
            {!['Other'].includes(foodEvent.meal) ? `${foodEvent.meal}: ` : ``}{foodEvent.name} {(foodEvent.items.length > 0 || foodEvent.showDetail) && (<a href={`#/food-details?id=${foodEvent.id}`}>Detail</a>)}
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
            {generalEvent.name} {generalEvent.items.length > 0 && (<a href={`#/general-details?id=${generalEvent.id}`}>Detail</a>)}
            {generalEvent.info.length > 0 && (
              <div>
                <ul style={{ marginTop: 0 }}>
                  {generalEvent.info.map(i => (
                    <>
                    {!Array.isArray(i) && (
                      <li>{i}</li>
                    )}
                    </>
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

const AgendaDay: React.FC<AgendaDayProps> = ({ day, agenda }) => {

  const columnHelper = createColumnHelper<EventInstance>()

  const columns = [
    columnHelper.accessor('start', {
      header: () => <div style={{width: "300px"}}>Time</div>,
      cell: info => <div style={{textAlign: "center", width: "300px", fontWeight: 700}}>{timeDisplay(info.getValue())}</div>
    }),
    columnHelper.accessor('lines', {
      header: () => <div style={{ textAlign: "left" }}>Activity</div>,
      cell: info => activityDisplay(info),
    }),
  ];

  return (
    <div>
      {agenda.length > 0 && (
        <>
          <h2>Agenda: {DayNames[day]}</h2>
          <SortableTable data={agenda} columns={columns} />
        </>
      )}
    </div>
  )
}

export default AgendaDay