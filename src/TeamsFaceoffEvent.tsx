import React from 'react'
import styles from './TeamsFaceoffEvent.module.css';

type TeamsFaceoffEventProps = {
  eventName: string;
  scoringTeam: "left" | "right" | "all";
}

const TeamsFaceoffEvent: React.FC<TeamsFaceoffEventProps> = ({eventName, scoringTeam}: TeamsFaceoffEventProps) => {

  const allText = "🤝";
  const allStyle = scoringTeam === "all" ? {fontSize: 80, lineHeight: "40px"} : {};

  const leftTeam = scoringTeam === "left" ? "1" : scoringTeam === "all" ? allText : 0
  const rightTeam = scoringTeam === "right" ? "1" : scoringTeam === "all" ? allText : 0

  return (
    <div className={styles.vsEventContainer}>
      <div className={styles.eventFiller}>.</div>
      <div className={styles.vsEvent} style={allStyle}>
        {leftTeam}
      </div>
      <div className={styles.vsEventSeparator}>{eventName}</div>
      <div className={styles.vsEvent} style={allStyle}>
        {rightTeam}
      </div>
      <div className={styles.eventFiller}>.</div>
    </div>
  )
}

export default TeamsFaceoffEvent;