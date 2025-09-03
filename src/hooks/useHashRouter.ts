import { useEffect, useState } from "react";

interface HashRoute {
  route: string;
  queryParams: {[key: string]: string};
  isHome: boolean;
}

const getRoute = () => {
  return window.location.hash.slice(1).split("?")[0] || "/";
}

const getQueryParams = () => {
  const defaultReturn = {};
  const queryParamsRaw = window.location.hash.slice(1).split("?");

  // only allow if 1 question mark present
  if (queryParamsRaw.length !== 2) {
    return defaultReturn;
  }

  const queryParamsKVPairs = queryParamsRaw[1].split("&");

  const returnParams: {[key: string]: string} = {};

  for (let i = 0; i < queryParamsKVPairs.length; i++) {
    const pair = queryParamsKVPairs[i].split("=");
    const key = pair[0];
    const value = pair[1];
    returnParams[key] = value;
  };

  // const returnParams = queryParamsKVPairs.map(pair => {
  //   return { [pair[0]]: pair[1] }
  // });

  return returnParams;
}

const useHashRoute = () => {
  const [route, setRoute] = useState<HashRoute>(
    {
      route: getRoute(),
      queryParams: getQueryParams(),
      isHome: window.location.hash.slice(1)[0] === undefined
    }
  );

  useEffect(() => {
    const onHashChange = () => {
      setRoute({
        route: getRoute(),
        queryParams: getQueryParams(),
        isHome: window.location.hash.slice(1)[0] === undefined
      });
    }

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
};

export default useHashRoute;