export type Generation = "Silent Gen" | "Baby Boomers" | "Gen X" | "Millennials" | "Gen Z" | "Gen Alpha" | "Little One";

export interface Room {
  name: string;
  site: string;
}

export const RoomsAndSites = {
    tuRoom: { name: "TU Room", site: "Farm" } as Room,
    ydRoom: { name: "Young D Room", site: "Farm" } as Room,
    edRoom: { name: "Elder D Room", site: "Farm" } as Room,
    office: { name: "The Office", site: "Farm" } as Room,
    basement: { name: "Basement", site: "Farm" } as Room,
    camper: { name: "Camper", site: "Farm" } as Room,
    none: { name: "no need", site: "no need" } as Room,
    nanaJs: { name: "Nana J's", site: "Nana J's" } as Room,
    waynes: { name: "Wayne's", site: "Wayne's" } as Room,
    needs: { name: "Need a Place", site: "Need a Place" } as Room,
    treehouseB: { name: "B Treehouse", site: "Farm" } as Room,
    treehouseG: { name: "G Treehouse", site: "Farm" } as Room,
    coffeeHouse: { name: "Coffee House", site: "Farm" } as Room,
    unknown: { name: "?", site: "?" } as Room,
}

export type Shirt = "YS" | "YM" | "YL" | "S" | "M" | "L" | "LT" | "XL" | "XLT" | "XXL" | "XXXL" | undefined;

export type Person = {
  id?: number;
  name: string;
  generation: Generation;
  shirt: Shirt;
  team: Team;
  sleeping: {
    friday: Room,
    saturday: Room,
    sunday: Room,
  };
  arrival?: Date | 'all',
  departure?: Date | 'all',
}

export interface Team {
  name: string;
  type: "main" | "secondary";
}

export const Teams = {
  TeamAMain: ({ name: "A", type: "main" }) as Team,
  TeamASecondary: ({ name: "A", type: "secondary" }) as Team,
  TeamBMain: ({ name: "B", type: "main" }) as Team, 
  TeamBSecondary: ({ name: "B", type: "secondary" } as Team), 
  TeamS: ({ name: "Spectator", type: "main" } as Team),
  TeamU: ({ name: "TBD", type: "main" } as Team),
}

const people: Person[] = [
  {
    id: 1,
    name: 'Je T.',
    generation: 'Millennials',
    shirt: "XLT",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.tuRoom,
      saturday: RoomsAndSites.tuRoom,
      sunday: RoomsAndSites.tuRoom,
    },
    arrival: new Date('2025-08-29T17:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 2,
    name: 'Am T.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.tuRoom,
      saturday: RoomsAndSites.tuRoom,
      sunday: RoomsAndSites.tuRoom,
    },
    arrival: new Date('2025-08-29T17:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 3,
    name: 'Ja T.',
    generation: 'Gen Alpha',
    shirt: "S",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.tuRoom,
      saturday: RoomsAndSites.tuRoom,
      sunday: RoomsAndSites.tuRoom,
    },
    arrival: new Date('2025-08-29T17:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 4,
    name: 'Gu T.',
    generation: 'Gen Alpha',
    shirt: "YS",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.tuRoom,
      saturday: RoomsAndSites.tuRoom,
      sunday: RoomsAndSites.tuRoom,
    },
    arrival: new Date('2025-08-29T17:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 5,
    name: 'Bo T.',
    generation: 'Little One',
    shirt: "YS",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.tuRoom,
      saturday: RoomsAndSites.tuRoom,
      sunday: RoomsAndSites.tuRoom,
    },
    arrival: new Date('2025-08-29T17:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 6,
    name: 'Gr D.',
    generation: 'Baby Boomers',
    shirt: "L",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.edRoom,
      saturday: RoomsAndSites.edRoom,
      sunday: RoomsAndSites.edRoom,
    },
    arrival: 'all',
    departure: 'all',
  },
  {
    id: 7,
    name: 'De D.',
    generation: 'Gen X',
    shirt: "XXL",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.edRoom,
      saturday: RoomsAndSites.edRoom,
      sunday: RoomsAndSites.edRoom,
    },
    arrival: 'all',
    departure: 'all',
  },
  {
    id: 8,
    name: 'Ru D.',
    generation: 'Millennials',
    shirt: "L",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.coffeeHouse,
      sunday: RoomsAndSites.coffeeHouse,
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 9,
    name: 'Cr D.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.coffeeHouse,
      sunday: RoomsAndSites.coffeeHouse,
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 10,
    name: 'Rh D.',
    generation: 'Gen Alpha',
    shirt: "S",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.coffeeHouse,
      sunday: RoomsAndSites.coffeeHouse,
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 11,
    name: 'Ma F.',
    generation: 'Millennials',
    shirt: "XLT",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.basement,
      sunday: RoomsAndSites.basement
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 12,
    name: 'Ja H.',
    generation: 'Gen Z',
    shirt: "XL",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.basement,
      sunday: RoomsAndSites.basement
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 13,
    name: 'Ri L.',
    generation: 'Millennials',
    shirt: "XXXL",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.office,
      sunday: RoomsAndSites.office
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 14,
    name: 'Li T.',
    generation: 'Silent Gen',
    shirt: "XXXL",
    team: Teams.TeamS,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T18:00:00'),
  },
  {
    id: 15,
    name: 'An J.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
  },
  {
    id: 16,
    name: 'Ma J.',
    generation: 'Millennials',
    shirt: "XXL",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
  },
  {
    id: 17,
    name: 'Ga J.',
    generation: 'Gen Z',
    shirt: "XL",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
  },
  {
    id: 18,
    name: 'Ha J.',
    generation: 'Gen Z',
    shirt: "M",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
  },
  {
    id: 19,
    name: 'Ma J.',
    generation: 'Little One',
    shirt: "YS",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
  },
  {
    id: 20,
    name: 'La J.',
    generation: 'Baby Boomers',
    shirt: "M",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.nanaJs,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs,
    },
  },
  {
    id: 21,
    name: 'Ta D.',
    generation: 'Millennials',
    shirt: 'M',
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.ydRoom,
      sunday: RoomsAndSites.ydRoom
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 22,
    name: 'Le D.',
    generation: 'Gen Z',
    shirt: 'S',
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.ydRoom,
      sunday: RoomsAndSites.ydRoom
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 23,
    name: 'Me J.',
    generation: 'Baby Boomers',
    shirt: "L",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 24,
    name: 'La S.',
    generation: 'Millennials',
    shirt: "M",
    team: Teams.TeamASecondary,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 25,
    name: 'Ja S.',
    generation: 'Millennials',
    shirt: "LT",
    team: Teams.TeamBSecondary,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 26,
    name: 'Ta S.',
    generation: 'Gen Alpha',
    shirt: "YM",
    team: Teams.TeamBSecondary,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 27,
    name: 'Gr S.',
    generation: 'Little One',
    shirt: "YS",
    team: Teams.TeamASecondary,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 28,
    name: 'Je R.',
    generation: 'Millennials',
    shirt: 'L',
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.unknown,
      sunday: RoomsAndSites.unknown
    },
  },
  {
    id: 29,
    name: 'Ed R.',
    generation: 'Millennials',
    shirt: 'XL',
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.unknown,
      sunday: RoomsAndSites.unknown
    },
  },
  {
    id: 30,
    name: 'Vi R.',
    generation: 'Gen Alpha',
    shirt: 'YL',
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.unknown,
      sunday: RoomsAndSites.unknown
    },
  },
  {
    id: 31,
    name: 'Sh D',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.ydRoom,
      sunday: RoomsAndSites.ydRoom
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 32,
    name: 'Ch W.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
  },
  {
    id: 33,
    name: 'Pa W.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
  },
  {
    id: 34,
    name: 'Ch W.',
    generation: 'Gen Z',
    shirt: undefined,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
  },
  {
    id: 35,
    name: 'St L.',
    generation: 'Gen Z',
    shirt: undefined,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
  },
  {
    id: 36,
    name: 'Wa D.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: RoomsAndSites.waynes,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
    arrival: new Date('2025-08-31T10:00:00'),
    departure: new Date('2025-08-31T17:00:00'),
  },
  {
    id: 37,
    name: 'Ly D.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: RoomsAndSites.waynes,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
    arrival: new Date('2025-08-31T10:00:00'),
    departure: new Date('2025-08-31T17:00:00'),
  },
  {
    id: 38,
    name: 'St S.',
    generation: 'Baby Boomers',
    shirt: "XXL",
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.camper,
      sunday: RoomsAndSites.camper
    },
  },
  {
    id: 39,
    name: 'Sh S.',
    generation: 'Baby Boomers',
    shirt: "XL",
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.camper,
      sunday: RoomsAndSites.camper
    },
  },
]

export default people;