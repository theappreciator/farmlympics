import Agenda from './Agenda';
import './App.css'
import TeamTable from './TeamTable';

export const Teams = {
  TeamA: "A",
  TeamB: "B",
  TeamU: "TBD",
} as const;
export type Teams = typeof Teams[keyof typeof Teams];

export type Generation = "Silent Gen" | "Baby Boomers" | "Gen X" | "Millennials" | "Gen Z" | "Gen Alpha" | "Little One";

export type Sleeping = "farm room" | "the office" | "basement" | "camper" | "none" | "Nana J's" | undefined;

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
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 2,
    name: 'Am T.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 3,
    name: 'Ja T.',
    generation: 'Gen Alpha',
    shirt: "S",
    team: Teams.TeamB,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 4,
    name: 'Gu T.',
    generation: 'Gen Alpha',
    shirt: "Kid",
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 5,
    name: 'Bo T.',
    generation: 'Little One',
    shirt: "Kid",
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 6,
    name: 'Gr D.',
    generation: 'Gen X',
    shirt: "L",
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 7,
    name: 'De D.',
    generation: 'Gen X',
    shirt: "L",
    team: Teams.TeamB,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 8,
    name: 'Ru D.',
    generation: 'Millennials',
    shirt: "L",
    team: Teams.TeamB,
    sleeping: {
      friday: 'none',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 9,
    name: 'Cr D.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: 'none',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 10,
    name: 'Rh D.',
    generation: 'Gen Alpha',
    shirt: "S",
    team: Teams.TeamA,
    sleeping: {
      friday: 'none',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    id: 11,
    name: 'Ma F.',
    generation: 'Millennials',
    shirt: "XLT",
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 12,
    name: 'Ja F.',
    generation: 'Gen Z',
    shirt: "XL",
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 13,
    name: 'Ri L.',
    generation: 'Millennials',
    shirt: "XXXL",
    team: Teams.TeamA,
    sleeping: {
      friday: "none",
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 14,
    name: 'Li T.',
    generation: 'Silent Gen',
    shirt: "XXL",
    team: Teams.TeamU,
    sleeping: {
      friday: "none",
      saturday: "none",
      sunday: "none",
    },
  },
  {
    id: 15,
    name: 'An J.',
    generation: 'Millennials',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 16,
    name: 'Ma J.',
    generation: 'Millennials',
    shirt: "XXL",
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 17,
    name: 'Ga J.',
    generation: 'Gen Z',
    shirt: "XL",
    team: Teams.TeamA,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 18,
    name: 'Ha J.',
    generation: 'Gen Z',
    shirt: "M",
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 19,
    name: 'Ma J.',
    generation: 'Little One',
    shirt: "Kid",
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 20,
    name: 'La J.',
    generation: 'Baby Boomers',
    shirt: "M",
    team: Teams.TeamB,
    sleeping: {
      friday: "Nana J's",
      saturday: "Nana J's",
      sunday: "Nana J's",
    },
  },
  {
    id: 21,
    name: 'Ta D.',
    generation: 'Millennials',
    shirt: 'M',
    team: Teams.TeamA,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 22,
    name: 'Le D.',
    generation: 'Gen Z',
    shirt: 'S',
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 23,
    name: 'Me J.',
    generation: 'Baby Boomers',
    shirt: "L",
    team: Teams.TeamU,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 24,
    name: 'La S.',
    generation: 'Millennials',
    shirt: undefined,
    team: Teams.TeamA,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 25,
    name: 'Ja S.',
    generation: 'Millennials',
    shirt: undefined,
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 26,
    name: 'Ta S.',
    generation: 'Gen Alpha',
    shirt: undefined,
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    id: 27,
    name: 'Gr S.',
    generation: 'Little One',
    shirt: undefined,
    team: Teams.TeamA,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
]



function App() {

  

  return (
    <>
      <h1>Farmlympics 2025</h1>

      <TeamTable team={Teams.TeamA} people={defaultData.filter(p => p.team === Teams.TeamA)}/>
      <TeamTable team={Teams.TeamB} people={defaultData.filter(p => p.team === Teams.TeamB)}/>
      <TeamTable team={Teams.TeamU} people={defaultData.filter(p => p.team === Teams.TeamU)}/>

      <Agenda />
    </>
  )
}

export default App
