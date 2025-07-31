import Agenda from './Agenda';
import './App.css'
import Arrivals from './Arrivals';
import people, { Teams } from './peeps';
import PeopleTable from './PeopleTable';
import SleepingArrangements from './SleepingArrangements';
import SleepingArrangementsBySite from './SleepingArrangementsBySite';
import TeamTable from './TeamTable';

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
      <PeopleTable people={people} />

      <a id="teama" />
      <TeamTable team={Teams.TeamA} people={people.filter(p => p.team === Teams.TeamA)}/>
      <a id="teamb" />
      <TeamTable team={Teams.TeamB} people={people.filter(p => p.team === Teams.TeamB)}/>
      <a id="TeamS" />
      <TeamTable team={Teams.TeamS} people={people.filter(p => p.team === Teams.TeamS)}/>
      <a id="TeamU" />
      <TeamTable team={Teams.TeamU} people={people.filter(p => p.team === Teams.TeamU)}/>

      <a id="arrivals" />
      <Arrivals people={people} />

      <a id="sleeping" />
      <SleepingArrangements people={people} />

      <a id="sleepingsite" />
      <SleepingArrangementsBySite people={people} />

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
