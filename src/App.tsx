import Agenda from './Agenda';
import './App.css'
import { makeBrandedType } from './helpers/brandedType';
import PeopleTable from './PeopleTable';
import SleepingArrangements from './SleepingArrangements';
import TeamTable from './TeamTable';

export const Teams = makeBrandedType({
    TeamA: "A",
    TeamB: "B",
    TeamU: "TBD",
}, 'teams')  ;
export type Teams = (typeof Teams)[keyof typeof Teams];

export type Generation = "Silent Gen" | "Baby Boomers" | "Gen X" | "Millennials" | "Gen Z" | "Gen Alpha" | "Little One";

export const Sleeping = makeBrandedType({
    tuRoom: "TU Room",
    ydRoom: "Young D Room",
    edRoom: "Elder D Room",
    office: "The Office",
    basement: "Basement",
    camper: "Camper",
    none: "None",
    NanaJs: "Nana J's",
    unknown: "?",
}, 'sleeping')  ;
export type Sleeping = (typeof Sleeping)[keyof typeof Sleeping];

export type Shirt = "Kid" | "S" | "M" | "L" | "XL" | "XLT" | "XXL" | "XXXL" | undefined;

export type Person = {
  id?: number;
  name: string;
  generation: Generation;
  shirt: Shirt;
  team: Teams;
  sleeping: {
    friday: Sleeping,
    saturday: Sleeping,
    sunday: Sleeping,
  };
}

const defaultData: Person[] = [
  {
    id: 1,
    name: 'Je T.',
    generation: 'Millennials',
    shirt: "XLT",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.tuRoom,
      saturday: Sleeping.tuRoom,
      sunday: Sleeping.tuRoom,
    },
  },
  {
    id: 2,
    name: 'Am T.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.tuRoom,
      saturday: Sleeping.tuRoom,
      sunday: Sleeping.tuRoom,
    },
  },
  {
    id: 3,
    name: 'Ja T.',
    generation: 'Gen Alpha',
    shirt: "S",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.tuRoom,
      saturday: Sleeping.tuRoom,
      sunday: Sleeping.tuRoom,
    },
  },
  {
    id: 4,
    name: 'Gu T.',
    generation: 'Gen Alpha',
    shirt: "Kid",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.tuRoom,
      saturday: Sleeping.tuRoom,
      sunday: Sleeping.tuRoom,
    },
  },
  {
    id: 5,
    name: 'Bo T.',
    generation: 'Little One',
    shirt: "Kid",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.tuRoom,
      saturday: Sleeping.tuRoom,
      sunday: Sleeping.tuRoom,
    },
  },
  {
    id: 6,
    name: 'Gr D.',
    generation: 'Baby Boomers',
    shirt: "L",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.edRoom,
      saturday: Sleeping.edRoom,
      sunday: Sleeping.edRoom,
    },
  },
  {
    id: 7,
    name: 'De D.',
    generation: 'Baby Boomers',
    shirt: "L",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.edRoom,
      saturday: Sleeping.edRoom,
      sunday: Sleeping.edRoom,
    },
  },
  {
    id: 8,
    name: 'Ru D.',
    generation: 'Millennials',
    shirt: "L",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.ydRoom,
      sunday: Sleeping.ydRoom,
    },
  },
  {
    id: 9,
    name: 'Cr D.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.ydRoom,
      sunday: Sleeping.ydRoom,
    },
  },
  {
    id: 10,
    name: 'Rh D.',
    generation: 'Gen Alpha',
    shirt: "S",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.ydRoom,
      sunday: Sleeping.ydRoom,
    },
  },
  {
    id: 11,
    name: 'Ma F.',
    generation: 'Millennials',
    shirt: "XLT",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.basement,
      sunday: Sleeping.basement
    },
  },
  {
    id: 12,
    name: 'Ja F.',
    generation: 'Gen Z',
    shirt: "XL",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.basement,
      sunday: Sleeping.basement
    },
  },
  {
    id: 13,
    name: 'Ri L.',
    generation: 'Millennials',
    shirt: "XXXL",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.office,
      sunday: Sleeping.office
    },
  },
  {
    id: 14,
    name: 'Li T.',
    generation: 'Silent Gen',
    shirt: "XXL",
    team: Teams.TeamU,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.none,
      sunday: Sleeping.none
    },
  },
  {
    id: 15,
    name: 'An J.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 16,
    name: 'Ma J.',
    generation: 'Millennials',
    shirt: "XXL",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 17,
    name: 'Ga J.',
    generation: 'Gen Z',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 18,
    name: 'Ha J.',
    generation: 'Gen Z',
    shirt: "M",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 19,
    name: 'Ma J.',
    generation: 'Little One',
    shirt: "Kid",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 20,
    name: 'La J.',
    generation: 'Baby Boomers',
    shirt: "M",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.NanaJs,
      saturday: Sleeping.NanaJs,
      sunday: Sleeping.NanaJs,
    },
  },
  {
    id: 21,
    name: 'Ta D.',
    generation: 'Millennials',
    shirt: 'M',
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 22,
    name: 'Le D.',
    generation: 'Gen Z',
    shirt: 'S',
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 23,
    name: 'Me J.',
    generation: 'Baby Boomers',
    shirt: "L",
    team: Teams.TeamU,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 24,
    name: 'La S.',
    generation: 'Millennials',
    shirt: undefined,
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 25,
    name: 'Ja S.',
    generation: 'Millennials',
    shirt: undefined,
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 26,
    name: 'Ta S.',
    generation: 'Gen Alpha',
    shirt: undefined,
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 27,
    name: 'Gr S.',
    generation: 'Little One',
    shirt: "Kid",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
]

interface AnchorLink {
  anchor: string;
  displayText: string;
}

const anchorLinks: AnchorLink[] = [
  { anchor: "people", displayText: "People" },
  { anchor: "teama", displayText: "Team A" },
  { anchor: "teamb", displayText: "Team B" },
  { anchor: "teamu", displayText: "Team TBD" },
  { anchor: "sleeping", displayText: "Sleeping Arrangements" },
  { anchor: "agenda", displayText: "Agenda" },
];

function App() {
  return (
    <>
      <h1>Farmlympics 2025</h1>

      {anchorLinks.map((link, i) => (
        <a key={link.anchor} href={`#${link.anchor}`} style={{ }}>
          {link.displayText}{i < anchorLinks.length - 1 ? ' | ' : ''}
        </a>
      ))}

      <a id="people" />
      <PeopleTable people={defaultData} />

      <a id="teama" />
      <TeamTable team={Teams.TeamA} people={defaultData.filter(p => p.team === Teams.TeamA)}/>
      <a id="teamb" />
      <TeamTable team={Teams.TeamB} people={defaultData.filter(p => p.team === Teams.TeamB)}/>
      <a id="teamu" />
      <TeamTable team={Teams.TeamU} people={defaultData.filter(p => p.team === Teams.TeamU)}/>

      <a id="sleeping" />
      <SleepingArrangements people={defaultData} />

      <a id="agenda" />
      <Agenda />
    </>
  )
}

export default App
