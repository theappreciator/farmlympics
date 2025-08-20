import {
  type Room,
  type Team,
  type Shirt,
  type Person,
} from '../types/index';

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

export const ShirtSizes = {
  youthSmall: { order: 1, code: "YS", display: "Youth Small" } as Shirt,
  youthMedium: { order: 2, code: "YM", display: "Youth Medium" } as Shirt,
  youthLarge: { order: 3, code: "YL", display: "Youth Large" } as Shirt,
  small: { order: 4, code: "S", display: "Small" } as Shirt,
  medium: { order: 5, code: "M", display: "Medium" } as Shirt,
  large: { order: 6, code: "L", display: "Large" } as Shirt,
  xlarge: { order: 7, code: "XL", display: "X-Large" } as Shirt,
  xxlarge: { order: 8, code: "XXL", display: "XX-Large" } as Shirt,
  xxxlarge: { order: 9, code: "XXXL", display: "XXX-Large" } as Shirt,
  largeTall: { order: 10, code: "LT", display: "Large Tall" } as Shirt,
  xlargeTall: { order: 11, code: "XLT", display: "X-Large Tall" } as Shirt,
  unknown: { order: 99999, code: "?", display: "?"} as Shirt,
}

export const Teams = {
  TeamAMain: ({ name: "Horns", type: "main" }) as Team,
  TeamASecondary: ({ name: "Horns", type: "secondary" }) as Team,
  TeamBMain: ({ name: "Flock", type: "main" }) as Team, 
  TeamBSecondary: ({ name: "Flock", type: "secondary" } as Team), 
  TeamS: ({ name: "Spectator", type: "main" } as Team),
  TeamU: ({ name: "TBD", type: "main" } as Team),
}

const people: Person[] = [
  {
    id: 1,
    name: "Je T.",
    generation: 'Millennials',
    shirt: ShirtSizes.xlargeTall,
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
    shirt: ShirtSizes.xlarge,
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
    shirt: ShirtSizes.small,
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
    shirt: ShirtSizes.youthSmall,
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
    shirt: ShirtSizes.youthSmall,
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
    shirt: ShirtSizes.large,
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
    shirt: ShirtSizes.xxlarge,
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
    shirt: ShirtSizes.large,
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
    shirt: ShirtSizes.xlarge,
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
    shirt: ShirtSizes.small,
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
    shirt: ShirtSizes.xlargeTall,
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
    shirt: ShirtSizes.xlarge,
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
    shirt: ShirtSizes.xxxlarge,
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
    shirt: ShirtSizes.xxxlarge,
    team: Teams.TeamBSecondary,
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
    shirt: ShirtSizes.xlarge,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 16,
    name: 'Ma J.',
    generation: 'Millennials',
    shirt: ShirtSizes.xxlarge,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 17,
    name: 'Ga J.',
    generation: 'Gen Z',
    shirt: ShirtSizes.xlarge,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 18,
    name: 'Ha J.',
    generation: 'Gen Z',
    shirt: ShirtSizes.medium,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 19,
    name: 'Ma J.',
    generation: 'Little One',
    shirt: ShirtSizes.youthSmall,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 20,
    name: 'La J.',
    generation: 'Baby Boomers',
    shirt: ShirtSizes.medium,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.nanaJs,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs,
    },
    arrival: 'all',
    departure: 'all',
  },
  {
    id: 21,
    name: 'Ta D.',
    generation: 'Millennials',
    shirt: ShirtSizes.medium,
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
    shirt: ShirtSizes.small,
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
    shirt: ShirtSizes.large,
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
    shirt: ShirtSizes.medium,
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
    shirt: ShirtSizes.largeTall,
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
    shirt: ShirtSizes.youthMedium,
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
    shirt: ShirtSizes.youthSmall,
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
    shirt: ShirtSizes.large,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 29,
    name: 'Ed R.',
    generation: 'Millennials',
    shirt: ShirtSizes.xlarge,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 30,
    name: 'Vi R.',
    generation: 'Gen Alpha',
    shirt: ShirtSizes.youthLarge,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.none,
      sunday: RoomsAndSites.none
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 31,
    name: 'Sh D.',
    generation: 'Baby Boomers',
    shirt: ShirtSizes.xxlarge,
    team: Teams.TeamASecondary,
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
    shirt: ShirtSizes.xxlarge,
    team: Teams.TeamBSecondary,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 33,
    name: 'Pa W.',
    generation: 'Baby Boomers',
    shirt: ShirtSizes.medium,
    team: Teams.TeamASecondary,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.waynes,
      sunday: RoomsAndSites.waynes
    },
    arrival: new Date('2025-08-31T08:00:00'),
    departure: new Date('2025-08-31T20:00:00'),
  },
  {
    id: 39,
    name: 'St S.',
    generation: 'Baby Boomers',
    shirt: ShirtSizes.xxlarge,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.camper,
      sunday: RoomsAndSites.camper
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 40,
    name: 'Sh S.',
    generation: 'Baby Boomers',
    shirt: ShirtSizes.xlarge,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.unknown,
      saturday: RoomsAndSites.camper,
      sunday: RoomsAndSites.camper
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
]

export default people;