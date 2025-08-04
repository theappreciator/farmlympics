import Agenda from './Agenda';
import './App.css'
import styles from './App.module.css'
import Arrivals from './Arrivals';
import people, { Teams } from './peeps';
import PeopleTable from './PeopleTable';
import SleepingArrangements from './SleepingArrangements';
import SleepingArrangementsBySite from './SleepingArrangementsBySite';
import TeamTable from './TeamTable';
import TShirts from './TShirts';

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

      <br/>
      <div className={styles.vsContainer}>
        <div>
          <img width="200px" src="chicken.jpg"/>
          <br/>
          Team Air
        </div>
        <div style={{marginLeft:"10px", marginRight: "10px", fontWeight: 700}}>VS.</div>
        <div>
          <img width="200px" src="cow.jpg"/>
          <br/>
          Team Land
        </div>
      </div>

      <a id="people" />
      <PeopleTable people={people} />

      <a id="teama" />
      <TeamTable team={[Teams.TeamAMain, Teams.TeamASecondary]} people={people.filter(p => [Teams.TeamAMain, Teams.TeamASecondary].includes(p.team))}/>
      <a id="teamb" />
      <TeamTable team={[Teams.TeamBMain, Teams.TeamBSecondary]} people={people.filter(p => [Teams.TeamBMain, Teams.TeamBSecondary].includes(p.team))}/>
      <a id="TeamS" />
      <TeamTable team={[Teams.TeamS]} people={people.filter(p => p.team === Teams.TeamS)}/>
      <a id="TeamU" />
      <TeamTable team={[Teams.TeamU]} people={people.filter(p => p.team === Teams.TeamU)}/>

      <TShirts people={people} />

      <a id="arrivals" />
      <Arrivals people={people} />

      <a id="sleeping" />
      <SleepingArrangements people={people} />

      <a id="sleepingsite" />
      <SleepingArrangementsBySite people={people} />

      <a id="agenda" />
      <Agenda />

      
      <h2>What is Being Provided</h2>
      <hr/>
      <div style={{width: '300px', margin: '0 auto'}}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
          <li>shirts</li>
          <li>water</li>
          <li>drinks</li>
          <li>food</li>
          <li>sunscreen</li>
          <li>FUN!</li>
        </ul>
      </div>

        <h2>What to Wear/Bring</h2>
        <hr />
        <div style={{width: '300px', margin: '0 auto'}}>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
          <li>comfy clothes and shoes to get sweaty and dirty</li>
          <li>hat</li>
          <li>sunglasses</li>
          <li>sunscreen</li>
        </ul>
      </div>

      <hr/>
      <div style={{width: 800}}>
      <img width="800px" src="chicken-banner.jpg"/>
      <img width="800px" src="bull-banner.jpg"/>
      </div>
    </>
  )
}

export default App
