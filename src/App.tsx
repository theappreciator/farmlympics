import Agenda from './Agenda';
import './App.css'
import Arrivals from './Arrivals';
import { makeBrandedType } from './helpers/brandedType';
import PeopleTable from './PeopleTable';
import SleepingArrangements from './SleepingArrangements';
import TeamTable from './TeamTable';

export const Teams = makeBrandedType({
    TeamA: "A",
    TeamB: "B",
    TeamS: "Spectator",
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
    none: "no need",
    nanaJs: "Nana J's",
    waynes: "Wayne's",
    needs: "Need a Place",
    unknown: "?",
}, 'sleeping')  ;
export type Sleeping = (typeof Sleeping)[keyof typeof Sleeping];

export type Shirt = "Kid" | "Kid S" | "Kid M" | "S" | "M" | "L" | "LT" | "XL" | "XLT" | "XXL" | "XXXL" | undefined;

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
  arrival?: Date | 'all',
  departure?: Date | 'all',
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
      friday: Sleeping.tuRoom,
      saturday: Sleeping.tuRoom,
      sunday: Sleeping.tuRoom,
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
      friday: Sleeping.tuRoom,
      saturday: Sleeping.tuRoom,
      sunday: Sleeping.tuRoom,
    },
    arrival: new Date('2025-08-29T17:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
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
      friday: Sleeping.tuRoom,
      saturday: Sleeping.tuRoom,
      sunday: Sleeping.tuRoom,
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
      friday: Sleeping.edRoom,
      saturday: Sleeping.edRoom,
      sunday: Sleeping.edRoom,
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
      friday: Sleeping.edRoom,
      saturday: Sleeping.edRoom,
      sunday: Sleeping.edRoom,
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
      friday: Sleeping.none,
      saturday: Sleeping.ydRoom,
      sunday: Sleeping.ydRoom,
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
      friday: Sleeping.none,
      saturday: Sleeping.ydRoom,
      sunday: Sleeping.ydRoom,
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
      friday: Sleeping.none,
      saturday: Sleeping.ydRoom,
      sunday: Sleeping.ydRoom,
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
      friday: Sleeping.none,
      saturday: Sleeping.needs,
      sunday: Sleeping.needs
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
      friday: Sleeping.none,
      saturday: Sleeping.needs,
      sunday: Sleeping.needs
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
      friday: Sleeping.none,
      saturday: Sleeping.needs,
      sunday: Sleeping.needs
    },
    arrival: new Date('2025-08-30T14:00:00'),
    departure: new Date('2025-09-01T12:00:00'),
  },
  {
    id: 14,
    name: 'Li T.',
    generation: 'Silent Gen',
    shirt: "XXL",
    team: Teams.TeamS,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.none,
      sunday: Sleeping.none
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
      friday: Sleeping.none,
      saturday: Sleeping.nanaJs,
      sunday: Sleeping.nanaJs
    },
  },
  {
    id: 16,
    name: 'Ma J.',
    generation: 'Millennials',
    shirt: "XXL",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.nanaJs,
      sunday: Sleeping.nanaJs
    },
  },
  {
    id: 17,
    name: 'Ga J.',
    generation: 'Gen Z',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.nanaJs,
      sunday: Sleeping.nanaJs
    },
  },
  {
    id: 18,
    name: 'Ha J.',
    generation: 'Gen Z',
    shirt: "M",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.nanaJs,
      sunday: Sleeping.nanaJs
    },
  },
  {
    id: 19,
    name: 'Ma J.',
    generation: 'Little One',
    shirt: "Kid S",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.nanaJs,
      sunday: Sleeping.nanaJs
    },
  },
  {
    id: 20,
    name: 'La J.',
    generation: 'Baby Boomers',
    shirt: "M",
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.nanaJs,
      saturday: Sleeping.nanaJs,
      sunday: Sleeping.nanaJs,
    },
  },
  {
    id: 21,
    name: 'Ta D.',
    generation: 'Millennials',
    shirt: 'M',
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.needs,
      sunday: Sleeping.needs
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
      friday: Sleeping.none,
      saturday: Sleeping.needs,
      sunday: Sleeping.needs
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
      friday: Sleeping.none,
      saturday: Sleeping.nanaJs,
      sunday: Sleeping.nanaJs
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
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 25,
    name: 'Ja S.',
    generation: 'Millennials',
    shirt: "LT",
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
    shirt: "Kid M",
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
    shirt: "Kid S",
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 28,
    name: 'Je R.',
    generation: 'Millennials',
    shirt: 'L',
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 29,
    name: 'Ed R.',
    generation: 'Millennials',
    shirt: 'XL',
    team: Teams.TeamB,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 30,
    name: 'Vi R.',
    generation: 'Gen Alpha',
    shirt: 'XL',
    team: Teams.TeamA,
    sleeping: {
      friday: Sleeping.unknown,
      saturday: Sleeping.unknown,
      sunday: Sleeping.unknown
    },
  },
  {
    id: 31,
    name: 'Sh D',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.office,
      sunday: Sleeping.office
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
      friday: Sleeping.none,
      saturday: Sleeping.waynes,
      sunday: Sleeping.waynes
    },
  },
  {
    id: 33,
    name: 'Pa W.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.waynes,
      sunday: Sleeping.waynes
    },
  },
  {
    id: 34,
    name: 'Ch W.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: Sleeping.none,
      saturday: Sleeping.waynes,
      sunday: Sleeping.waynes
    },
  },
  {
    id: 35,
    name: 'Wa D.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: Sleeping.waynes,
      saturday: Sleeping.waynes,
      sunday: Sleeping.waynes
    },
    arrival: new Date('2025-08-31T10:00:00'),
    departure: new Date('2025-08-31T17:00:00'),
  },
  {
    id: 36,
    name: 'Ly D.',
    generation: 'Baby Boomers',
    shirt: undefined,
    team: Teams.TeamS,
    sleeping: {
      friday: Sleeping.waynes,
      saturday: Sleeping.waynes,
      sunday: Sleeping.waynes
    },
    arrival: new Date('2025-08-31T10:00:00'),
    departure: new Date('2025-08-31T17:00:00'),
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
  { anchor: "arrivals", displayText: "Arrivals" },
  { anchor: "sleeping", displayText: "Sleeping Arrangements" },
  { anchor: "agenda", displayText: "Agenda" },
  { anchor: "tobring", displayText: "Wear/Bring" },
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
      <a id="TeamS" />
      <TeamTable team={Teams.TeamS} people={defaultData.filter(p => p.team === Teams.TeamS)}/>
      <a id="TeamU" />
      <TeamTable team={Teams.TeamU} people={defaultData.filter(p => p.team === Teams.TeamU)}/>

      <a id="arrivals" />
      <Arrivals people={defaultData} />

      <a id="sleeping" />
      <SleepingArrangements people={defaultData} />

      <a id="agenda" />
      <Agenda />

      <div style={{width: '300px', margin: '0 auto'}}>
        <h2>What to Wear/Bring</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
          <li>comfy clothes and shoes to get sweaty and dirty</li>
          <li>water</li>
          <li>sunscreen</li>
        </ul>
      </div>
    </>
  )
}

export default App
