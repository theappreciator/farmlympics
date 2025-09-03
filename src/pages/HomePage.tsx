import styles from './HomePage.module.css'
import Agenda from '../components/Agenda';
import Arrivals from '../components/Arrivals';
import people, { Teams } from '../data/peeps';
import Groceries from '../components/Groceries';
import { getAllItems } from '../helpers/eventHelper';
import PeopleTable from '../components/PeopleTable';
import SleepingArrangements from '../components/SleepingArrangements';
import SleepingArrangementsBySite from '../components/SleepingArrangementsBySite';
import TeamsFaceoff from '../components/TeamsFaceoff';
import TeamTable from '../components/TeamTable';
import TShirts from '../components/TShirts';
import WeatherForecast from '../components/WeatherForecast';
import WhatIsProvided from '../components/WhatIsProvided';
import WhatToBring from '../components/WhatToBring';

interface AnchorLink {
  anchor: string;
  displayText: string;
}

const anchorLinks: AnchorLink[] = [
  { anchor: "people", displayText: "People" },
  { anchor: "teama", displayText: "Team Horns" },
  { anchor: "teamb", displayText: "Team Flock" },
  { anchor: "arrivals", displayText: "Arrivals" },
  { anchor: "sleeping", displayText: "Sleeping Arrangements" },
  { anchor: "agenda", displayText: "Agenda" },
  { anchor: "tobring", displayText: "Wear/Bring" },
  { anchor: "tobuy", displayText: "Buy List" },
];

function HomePage() {

  return (
    <>
      <h1>Farmlympics 2025</h1>

      <hr />
      <div className={styles.heading}>
        {anchorLinks.map((link, i) => (
          <a key={link.anchor} href={`#${link.anchor}`} style={{}}>
            {link.displayText}{i < anchorLinks.length - 1 ? ' | ' : ''}
          </a>
        ))}
      </div>
      <hr />

      <br />
      <TeamsFaceoff />

      <hr />

      <WeatherForecast />

      <a id="people" />
      <PeopleTable people={people} />

      <a id="teama" />
      <TeamTable team={[Teams.TeamAMain, Teams.TeamASecondary]} people={people.filter(p => [Teams.TeamAMain, Teams.TeamASecondary].includes(p.team))} />
      <a id="teamb" />
      <TeamTable team={[Teams.TeamBMain, Teams.TeamBSecondary]} people={people.filter(p => [Teams.TeamBMain, Teams.TeamBSecondary].includes(p.team))} />
      <a id="TeamS" />
      <TeamTable team={[Teams.TeamS]} people={people.filter(p => p.team === Teams.TeamS)} />
      <a id="TeamU" />
      <TeamTable team={[Teams.TeamU]} people={people.filter(p => p.team === Teams.TeamU)} />

      <TShirts people={people} />

      <a id="arrivals" />
      <Arrivals people={people} />

      <a id="sleeping" />
      <SleepingArrangements people={people} />

      <a id="sleepingsite" />
      <SleepingArrangementsBySite people={people} />

      <a id="agenda" />
      <Agenda />

      <WhatIsProvided />

      <a id="tobring" />
      <WhatToBring />

      <a id="tobuy" />
      <Groceries items={getAllItems()} />

      <hr />
      <h2>Logos</h2>
      <div style={{ width: 800, marginLeft: "auto", marginRight: "auto" }}>
        <img width="800px" src="flock-shirt-front.jpg" />
        <img width="800px" src="horns-shirt-front.jpg" />
      </div>
    </>
  )
}

export default HomePage
