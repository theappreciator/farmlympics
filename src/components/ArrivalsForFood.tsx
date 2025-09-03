import React from 'react'
// import styles from './ArrivalsForFood.module.css'

import {
  createColumnHelper,
} from '@tanstack/react-table'

import type { DayName, Person, MealType, Room } from '../types';
import { arrivalHelper } from '../helpers/arrivalHelper';
import SortableTable from './SortableTable';

type ArrivalsForFoodProps = {
  people: Person[];
  day: DayName;
  meal: MealType;
};

const columnHelper = createColumnHelper<ArrivalsForToday>()

const columns = [
  columnHelper.accessor('person.name', {
    header: () => <div style={{textAlign: "left"}}>Name</div>,
    cell: info => info.getValue(),
  }),
  // columnHelper.accessor('sleeping', {
  //   header: () => <div style={{textAlign: "center"}}>Location</div>,
  //   cell: info => <div style={{textAlign: "center"}}>{info.getValue()?.site !== "no need" ? info.getValue()?.site : "༚"}</div>,
  // }),
  columnHelper.accessor('today', {
    header: () => <span style={{textAlign: "center"}}>Arrival/Departure Time</span>,
    cell: info => <div style={{textAlign: "center"}}>{info.getValue()}</div>,
    footer: info => <div style={{textAlign: "center"}}>{`Total: ${info.table.getFilteredRowModel().rows.filter(r => r.original.today !== undefined).length} people`}</div>
  }),
]

type ArrivalsForToday = {
    person: Person;
    sleeping: Room;
    today?: string;
}

const arrivalDisplayHelper = (arrivalString?: string, departureString?: string ) => {
  let returnString = "";

  if (arrivalString === departureString) {
    return arrivalString;
  }

  if (arrivalString) {
    returnString += arrivalString;
  }

  if (departureString) {
    if(returnString) {
      returnString+= ', '
    }
    returnString += departureString;
  }

  return returnString;
}

const arrivalTimeHelper = (day: DayName, meal: MealType, arrivalDate?: Date | 'all', departDate?: Date | 'all'): string | undefined => {
  const arrivals = arrivalHelper(day, arrivalDate, departDate);

  const breakfastTime = 8;
  const lunchTime = 12;
  const dinnerTime = 18;

  const otherEvening = 19;

  switch (meal) {
    case "Breakfast":
      if ((arrivals?.todayArrivalNumber !== undefined && arrivals.todayArrivalNumber <= breakfastTime) &&
          (arrivals?.todayDepartureNumber !== undefined && arrivals.todayDepartureNumber > breakfastTime)) {
        return arrivalDisplayHelper(arrivals.todayArrivalString, arrivals.todayDepartureString);
      }
      break;
    case "Lunch":
      if ((arrivals?.todayArrivalNumber !== undefined && arrivals.todayArrivalNumber <= lunchTime) &&
          (arrivals?.todayDepartureNumber !== undefined && arrivals.todayDepartureNumber > lunchTime)) {
        return arrivalDisplayHelper(arrivals.todayArrivalString, arrivals.todayDepartureString);
      }
      break;
    case "Dinner":
      if ((arrivals?.todayArrivalNumber !== undefined && arrivals.todayArrivalNumber <= dinnerTime) &&
          (arrivals?.todayDepartureNumber !== undefined && arrivals.todayDepartureNumber > dinnerTime)) {
        return arrivalDisplayHelper(arrivals.todayArrivalString, arrivals.todayDepartureString);
      }
      break;
    case "Other-Evening":
      if ((arrivals?.todayArrivalNumber !== undefined && arrivals.todayArrivalNumber <= otherEvening) &&
          (arrivals?.todayDepartureNumber !== undefined && arrivals.todayDepartureNumber > otherEvening)) {
        return arrivalDisplayHelper(arrivals.todayArrivalString, arrivals.todayDepartureString);
      }
      break;
    case "Other":
      return arrivalDisplayHelper(arrivals?.todayArrivalString, arrivals?.todayDepartureString);
      break;
    default:
      break;
  }

  return undefined;
};

const ArrivalsForFood: React.FC<ArrivalsForFoodProps> = ({ people, day, meal }) => {

  const arrivalsForToday: ArrivalsForToday[] = people.map(person => {
    const today = arrivalTimeHelper(day, meal, person.arrival, person.departure);

    let sleepDay = day.toLowerCase() as "friday" | "saturday" | "sunday" | "monday";
    if (sleepDay === "monday") {
      sleepDay = "sunday";
    }
    else if (sleepDay === "sunday") {
      sleepDay = "saturday";
    }
    else if (sleepDay === "saturday") {
      sleepDay = "friday";
    }

    return {
      person,
      sleeping: person.sleeping[sleepDay],
      today
    }
  }).filter(a => a.today !== undefined);

  return (
    <>
    {arrivalsForToday.length > 0 && (
      <>
        <h3>People in Attendence = {arrivalsForToday.length}</h3>
        <SortableTable data={arrivalsForToday || []} columns={columns} />
      </>
    )}
    </>
  )
}

export default ArrivalsForFood