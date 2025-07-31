import type { Shirt, Room } from "../App";

export const sleepingDisplay = (room: Room): string => {
  if (room === undefined) {
    return "?";
  }
  
  return room.name;
}

export const emptyHelper = (value: Shirt) => {
  if (value === undefined || typeof value === 'undefined') {
    return "?";
  }
  
  return value;
}