import { hydrateName } from '../helpers/nameHelper';
import {
  type Room,
  type Team,
  type Shirt,
  type Person,
} from '../types/index';

const fullNameModulePath = "./peepsFullnames";
const importedModule = await import(/* @vite-ignore */fullNameModulePath).then((m) => m).catch(() => { console.log("ERROR LOADING"); return  { default: {} } });
const fullNames = importedModule.default;

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
    name: hydrateName(1, "Je T.", fullNames),
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
    name: hydrateName(2, "Am T.", fullNames),
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
    name: hydrateName(3, "Ja T.", fullNames),
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
    name: hydrateName(4, "Gu T.", fullNames),
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
    name: hydrateName(5, "Bo T.", fullNames),
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
    name: hydrateName(6, "Gr D.", fullNames),
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
    name: hydrateName(7, "De D.", fullNames),
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
    name: hydrateName(8, "Ru D.", fullNames),
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
    name: hydrateName(9, "Cr D.", fullNames),
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
    name: hydrateName(10, "Rh D.", fullNames),
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
    name: hydrateName(11, "Ma F.", fullNames),
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
    name: hydrateName(12, "Ja H.", fullNames),
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
    name: hydrateName(13, "Ri L.", fullNames),
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
    name: hydrateName(14, "Li T.", fullNames),
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
    name: hydrateName(15, "An J.", fullNames),
    generation: 'Millennials',
    shirt: ShirtSizes.xlarge,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 16,
    name: hydrateName(16, "Ma J.", fullNames),
    generation: 'Millennials',
    shirt: ShirtSizes.xxlarge,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 17,
    name: hydrateName(17, "Ga J.", fullNames),
    generation: 'Gen Z',
    shirt: ShirtSizes.xlarge,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 18,
    name: hydrateName(18, "Ha J.", fullNames),
    generation: 'Gen Z',
    shirt: ShirtSizes.medium,
    team: Teams.TeamAMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 19,
    name: hydrateName(19, "Ma J.", fullNames),
    generation: 'Little One',
    shirt: ShirtSizes.youthSmall,
    team: Teams.TeamBMain,
    sleeping: {
      friday: RoomsAndSites.none,
      saturday: RoomsAndSites.nanaJs,
      sunday: RoomsAndSites.nanaJs
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 20,
    name: hydrateName(20, "La J.", fullNames),
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
    name: hydrateName(21, "Ta D.", fullNames),
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
    name: hydrateName(22, "Le D.", fullNames),
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
    name: hydrateName(23, "Me J.", fullNames),
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
    name: hydrateName(24, "La S.", fullNames),
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
    name: hydrateName(25, "Ja S.", fullNames),
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
    name: hydrateName(26, "Ta S.", fullNames),
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
    name: hydrateName(27, "Gr S.", fullNames),
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
    name: hydrateName(28, "Je R.", fullNames),
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
    name: hydrateName(29, "Ed R.", fullNames),
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
    name: hydrateName(30, "Vi R.", fullNames),
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
    name: hydrateName(31, "Sh D.", fullNames),
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
    name: hydrateName(32, "Ch W.", fullNames),
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
    name: hydrateName(33, "Pa W.", fullNames),
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
    id: 34,
    name: hydrateName(34, "St S.", fullNames),
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
    id: 35,
    name: hydrateName(35, "Sh S.", fullNames),
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