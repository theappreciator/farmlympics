import './App.css'
import TeamTable from './TeamTable';

// export type Team = "A" | "B";

export const Teams = {
  TeamA: "A",
  TeamB: "B",
  TeamU: "TBD",
} as const;
export type Teams = typeof Teams[keyof typeof Teams];

export type Generation = "Silent Gen" | "Baby Boomers" | "Gen X" | "Millennials" | "Gen Z" | "Gen Alpha" | "Little One";

export type Sleeping = "farm room" | "the office" | "basement" | "camper" | "none" | undefined;

export type Person = {
  name: string
  generation: Generation
  team: Teams
  sleeping: {
    friday: Sleeping,
    saturday: Sleeping,
    sunday: Sleeping,
  }
}

const defaultData: Person[] = [
  {
    name: 'Je. T.',
    generation: 'Millennials',
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Am. T.',
    generation: 'Millennials',
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Ja. T.',
    generation: 'Gen Alpha',
    team: Teams.TeamB,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Gu. T.',
    generation: 'Gen Alpha',
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Bo. T.',
    generation: 'Little One',
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Gr. D.',
    generation: 'Gen X',
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'De. D.',
    generation: 'Gen X',
    team: Teams.TeamA,
    sleeping: {
      friday: 'farm room',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Ru. D.',
    generation: 'Millennials',
    team: Teams.TeamB,
    sleeping: {
      friday: 'none',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Cr. D.',
    generation: 'Millennials',
    team: Teams.TeamA,
    sleeping: {
      friday: 'none',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Rh. D.',
    generation: 'Gen Alpha',
    team: Teams.TeamA,
    sleeping: {
      friday: 'none',
      saturday: 'farm room',
      sunday: 'farm room',
    },
  },
  {
    name: 'Ma. F.',
    generation: 'Millennials',
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    name: 'Ja. F.',
    generation: 'Gen Z',
    team: Teams.TeamB,
    sleeping: {
      friday: undefined,
      saturday: undefined,
      sunday: undefined
    },
  },
  {
    name: 'Ri. L.',
    generation: 'Millennials',
    team: Teams.TeamA,
    sleeping: {
      friday: "none",
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

    </>
  )
}

export default App
