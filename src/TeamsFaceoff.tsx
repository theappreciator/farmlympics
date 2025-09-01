import React from 'react'
import styles from './TeamsFaceoff.module.css';
import TeamsFaceoffEvent from './TeamsFaceoffEvent';

type TeamsFaceoffProps = {

}

const TeamsFaceoff: React.FC<TeamsFaceoffProps> = () => {

  return (
    <>
      <div className={styles.intro}>Cherry Hill Farm presents the 6th annual Farmlympics...</div>

      <div className={styles.vsContainer}>
        <div className={styles.team}>
          <img width="200px" src="chicken.jpg" />
          <div className={styles.teamName}>
            Flock of Fury
          </div>
        </div>
        <div className={styles.vsSeparator}>VS.</div>
        <div className={styles.team}>
          <img width="200px" src="cow.jpg" />
          <div className={styles.teamName}>
            Horns &amp; Havoc
          </div>
        </div>
      </div>
      <TeamsFaceoffEvent eventName="Farmer Says" scoringTeam="left" />
      <TeamsFaceoffEvent eventName="Cow Branding" scoringTeam="right"/>
      <TeamsFaceoffEvent eventName="Cow Banding" scoringTeam="left"/>
      <TeamsFaceoffEvent eventName="Scavenger Hunt" scoringTeam="right"/>
      <TeamsFaceoffEvent eventName="Eggs to Market" scoringTeam="right"/>
      <TeamsFaceoffEvent eventName="Cow Patty Toss" scoringTeam="left"/>
      <TeamsFaceoffEvent eventName="Sudden Death" scoringTeam="all"/>
      <br/>
      <hr/>
      <div className={styles.closingWords}>
        Great games played with heart handshakes all around. Congratulations to everyone for another well-done year!
        <br/>
        <br/>
        Thank you 2025, see you in 2026!
      </div>
    </>
  )
}

export default TeamsFaceoff;