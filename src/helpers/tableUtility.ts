import type { Shirt, Sleeping } from "../App";

export const sleepingDisplay = (sleeping: Sleeping) => {
  if (sleeping === undefined) {
    return "?";
  }
  else if (sleeping === "None") {
    return "no";
  }
  
  return sleeping;
}

export const emptyHelper = (value: Shirt) => {
  if (value === undefined || typeof value === 'undefined') {
    return "?";
  }
  
  return value;
}