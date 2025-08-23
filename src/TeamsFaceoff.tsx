import React from 'react'
import styles from './TeamsFaceoff.module.css';

type TeamsFaceoffProps = {

}

const TeamsFaceoff: React.FC<TeamsFaceoffProps> = () => {

  return (
    <>
      <div className={styles.intro}>Cherry Hill Farm presents the 6th annual Farmlympics...</div>

      <div className={styles.vsContainer} style={{ fontWeight: 700 }}>
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
    </>
  )
}

export default TeamsFaceoff;