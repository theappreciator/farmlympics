import React from 'react'
import styles from './ArrivalsForFood.module.css'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  type SortingState,
} from '@tanstack/react-table'

import type { DayName, Person, MealType, Room } from './types';
import { arrivalHelper } from './helpers/arrivalHelper';

type ArrivalsForFoodProps = {
  people: Person[];
  day: DayName;
  meal: MealType;
};

const columnHelper = createColumnHelper<ArrivalsForToday>()

const columns = [
  columnHelper.accessor('person.name', {
    header: () => <span>Name</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('sleeping', {
    header: () => <div style={{textAlign: "center"}}>Location</div>,
    cell: info => <div style={{textAlign: "center"}}>{info.getValue()?.site !== "no need" ? info.getValue()?.site : "༚"}</div>,
  }),
  columnHelper.accessor('today', {
    header: () => <div style={{textAlign: "center"}}>Arrival/Departure Time</div>,
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

  console.log(arrivals);
  console.log(meal);
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
    console.log("Working ", person.name, person.sleeping.friday.site, person.sleeping.saturday.site, person.sleeping.sunday.site);
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

    console.log(sleepDay, person.sleeping[sleepDay]);
    console.log(today);

    return {
      person,
      sleeping: person.sleeping[sleepDay],
      today
    }
  }).filter(a => a.today !== undefined);

  const [data, _setData] = React.useState(() => [...arrivalsForToday])

  const [sorting, setSorting] = React.useState<SortingState>([]);

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
    {data.length > 0 && (
      <>
      <h3>People in Attendence = {arrivalsForToday.length}</h3>
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
      </>
    )}
    </>
  )
}

export default ArrivalsForFood