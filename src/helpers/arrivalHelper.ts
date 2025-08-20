import { format } from 'date-fns';
import type { DayName } from '../types';

export const arrivalHelper = (day: DayName, arrivalDate?: Date | 'all', departDate?: Date | 'all'): {
  arrivalString: string | undefined,
  todayArrivalNumber: number | undefined,
  todayDepartureNumber: number | undefined,
  todayArrivalString: string | undefined,
  todayDepartureString: string | undefined,
} | undefined => {
  if (!arrivalDate || !departDate) return undefined;

  if (arrivalDate === 'all') return {
    arrivalString: "🛏️",
    todayArrivalNumber: 0,
    todayDepartureNumber: 24,
    todayArrivalString: "🛏️",
    todayDepartureString: "🛏️",
  };

  let arriveToday = false;
  let departToday = false;
  let arrivedBeforeToday = false;
  let departedBeforeToday = false;

  let dayAfter, dayOf;

  if (day === "Friday") {
    dayAfter = new Date('2025-08-30T00:00:00');
    dayOf = new Date('2025-08-29T00:00:00');
  }
  else if (day === "Saturday") {
    dayAfter = new Date('2025-08-31T00:00:00');
    dayOf = new Date('2025-08-30T00:00:00');
  }
  else if (day === "Sunday") {
    dayAfter = new Date('2025-09-01T00:00:00');
    dayOf = new Date('2025-08-31T00:00:00');
  }
  else {
    dayAfter = new Date('2025-09-02T00:00:00');
    dayOf = new Date('2025-09-01T00:00:00');
  }

  if (arrivalDate < dayAfter) {
    if (arrivalDate >= dayOf) {
      arriveToday = true;
    }
    if (departDate < dayAfter && departDate >= dayOf) {
      departToday = true;
    }
  }

  if (arrivalDate < dayOf && !arriveToday && !departToday) {
    arrivedBeforeToday = true;
  }
  if (departDate < dayOf) {
    departedBeforeToday = true;
  }

  let arrivalString = '';
  let todayArrivalNumber: number | undefined = undefined;
  let todayDepartureNumber: number | undefined = undefined;
  let todayArrivalString: string | undefined = undefined;
  let todayDepartureString: string | undefined = undefined;

  if (arrivedBeforeToday && !departedBeforeToday) {
    arrivalString += '🛏️';
    todayArrivalNumber = 0;
    todayArrivalString = "🛏️"
    todayDepartureNumber = 24;
    todayDepartureString = "🛏️";
  }
  else {
    if (arriveToday) {
      arrivalString += format(arrivalDate, 'haaaaa');
      todayArrivalNumber = parseInt(format(arrivalDate, "H"));
      todayArrivalString = `→🚪 ${format(arrivalDate, 'haaaaa')}`;

      if (!departToday) {
        todayDepartureNumber = 24;
        todayDepartureString = "🛏️";
      }
    }
    if (departToday) {
      if (arrivalString) {
        arrivalString += ' - ';
      }
      else {
        todayArrivalNumber = 0;
        todayArrivalString = "";
      }
      arrivalString += format(departDate, 'haaaaa');
      todayDepartureNumber = parseInt(format(departDate, "H"));
      todayDepartureString = `${format(departDate, 'haaaaa')} 🚪→`;
    }
  }

  if (arrivalString === '') {
    arrivalString = '༚';
  }

  console.log(arrivalDate);
  console.log(departDate);
  console.log(arrivalString);
  console.log(todayArrivalNumber, todayDepartureNumber);
  console.log(todayArrivalString, todayDepartureString);

  return {
    arrivalString: arrivalString ? arrivalString : undefined,
    todayArrivalNumber,
    todayDepartureNumber,
    todayArrivalString,
    todayDepartureString
  }
}