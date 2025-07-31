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
    unknown: { name: "?", site: "?" } as Room,
}

export type Shirt = "Kid" | "Kid S" | "Kid M" | "YL" | "S" | "M" | "L" | "LT" | "XL" | "XLT" | "XXL" | "XXXL" | undefined;

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
}

export const Teams = {
  TeamA: { name: "A" },
  TeamB: { name: "B" }, 
  TeamS: { name: "Spectator" },
  TeamU: { name: "TBD" },
}

// Kim?
// sleeping:
//   treehouse -> Ta/Le
//   office -> Taryn/Leo
//   Kathy's log cabin -> Riley?
//   Kathy's house -> Russ, Crystal, Rhodes, Taryn, Leo (Rhodes/Leo in double beds, Taryn in other bed, Russ/Cystal in other bed)
// Chrstian -> Star
// Test drive
//   maybe 3?
//   steven/sharon -> 9/10
//   maybe 16? pick up kids from their week
//   maybe 17? pro - kids are there all weekend
//   kids teachers -> 23/24

const people: Person[] = [
  {
    id: 1,
    name: 'Je T.',
    generation: 'Millennials',
    shirt: "XLT",
    team: Teams.TeamB,
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
    team: Teams.TeamA,
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
    team: Teams.TeamB,
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
    shirt: "Kid S",
    team: Teams.TeamA,
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
    shirt: "Kid S",
    team: Teams.TeamA,
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
    team: Teams.TeamA,
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
    shirt: "L",
    team: Teams.TeamB,
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
    team: Teams.TeamB,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.ydRoom,
      sunday: RoomsAndSites.ydRoom,
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 9,
    name: 'Cr D.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.ydRoom,
      sunday: RoomsAndSites.ydRoom,
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 10,
    name: 'Rh D.',
    generation: 'Gen Alpha',
    shirt: "S",
    team: Teams.TeamA,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.ydRoom,
      sunday: RoomsAndSites.ydRoom,
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 11,
    name: 'Ma F.',
    generation: 'Millennials',
    shirt: "XLT",
    team: Teams.TeamB,
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
    name: 'Ja F.',
    generation: 'Gen Z',
    shirt: "XL",
    team: Teams.TeamB,
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
    team: Teams.TeamA,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.needs,
      sunday: RoomsAndSites.needs
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
    team: Teams.TeamA,
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
    team: Teams.TeamB,
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
    team: Teams.TeamA,
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
    team: Teams.TeamB,
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
    shirt: "Kid S",
    team: Teams.TeamB,
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
    team: Teams.TeamB,
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
    team: Teams.TeamA,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.office,
      sunday: RoomsAndSites.office
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 22,
    name: 'Le D.',
    generation: 'Gen Z',
    shirt: 'S',
    team: Teams.TeamB,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.office,
      sunday: RoomsAndSites.office
    },
    arrival: new Date('2025-08-30T12:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 23,
    name: 'Me J.',
    generation: 'Baby Boomers',
    shirt: "L",
    team: Teams.TeamA,
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
    team: Teams.TeamA,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.unknown,
      sunday: RoomsAndSites.unknown
    },
  },
  {
    id: 25,
    name: 'Ja S.',
    generation: 'Millennials',
    shirt: "LT",
    team: Teams.TeamB,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.unknown,
      sunday: RoomsAndSites.unknown
    },
  },
  {
    id: 26,
    name: 'Ta S.',
    generation: 'Gen Alpha',
    shirt: "Kid M",
    team: Teams.TeamB,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.unknown,
      sunday: RoomsAndSites.unknown
    },
  },
  {
    id: 27,
    name: 'Gr S.',
    generation: 'Little One',
    shirt: "Kid S",
    team: Teams.TeamA,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.unknown,
      sunday: RoomsAndSites.unknown
    },
  },
  {
    id: 28,
    name: 'Je R.',
    generation: 'Millennials',
    shirt: 'L',
    team: Teams.TeamA,
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
    team: Teams.TeamB,
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
    team: Teams.TeamA,
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
      saturday: RoomsAndSites.office,
      sunday: RoomsAndSites.office
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
    team: Teams.TeamB,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
  },
  {
    id: 35,
    name: 'Star',
    generation: 'Gen Z',
    shirt: undefined,
    team: Teams.TeamB,
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
    name: 'St ?.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamU,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.camper,
      sunday: RoomsAndSites.camper
    },
  },
  {
    id: 39,
    name: 'Sh ?.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamU,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.camper,
      sunday: RoomsAndSites.camper
    },
  },
]

export default people;