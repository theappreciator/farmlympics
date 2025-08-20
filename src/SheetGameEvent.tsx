import styles from './SheetGameEvent.module.css';

import React from 'react'

import type { GameEvent } from './types';

export type SheetGameEventProps = {
  gameEvent: GameEvent;
};

const SheetGameEvent: React.FC<SheetGameEventProps> = ({ gameEvent }) => {
  return (
    <>
      <h2>Game: {gameEvent?.game.name}</h2>
      <h3>What is it?</h3>
      <ul><li>{gameEvent?.game.what}</li></ul>
      <h3>How to win?</h3>
      <ul><li>{gameEvent?.game.winning}</li></ul>
      <h3>How to Play:</h3>
      <ul>
        {gameEvent?.game.how?.map(h => {
          if (Array.isArray(h)) {
            return (
              <ul>
                {h.map(sh => (
                  <li>{sh}</li>
                ))}
              </ul>
            )
          }
          else {
            return (
              <li>{h}</li>
            )
          }
        })}
      </ul>
      <h3>Rules:</h3>
      <ul>
        {gameEvent?.game.rules?.map(r => {
          if (Array.isArray(r)) {
            return (
              <ul>
                {r.map(sr => (
                  <li>{sr}</li>
                ))}
              </ul>
            )
          }
          else {
            return (
              <li>{r}</li>
            )
          }
        })}
      </ul>
      <h3>Setup:</h3>
      <ul>
        {gameEvent?.game.setup?.map(s => (
          <li>{s}</li>
        ))}
      </ul>
      <h3>Time:</h3>
      <ul>
        {gameEvent?.game.time?.map(t => (
          <li>{t}</li>
        ))}
      </ul>
      <hr />
      <div>
        <h3>General Definitions</h3>
        <br />
        <div>
          <span className={styles.title}>On Team</span>: <span>The team is actively participating in the current round, ie: playing now</span>
        </div>
        <div>
          <span className={styles.title}>Off Team</span>: <span>The team not actively participating in ths current round, ie: not playing now</span>
        </div>
        <div>
          <span className={styles.title}>Home Base</span>: <span>Team neutral, safe location for teams to congregate and recieve instructions</span>
        </div>
        <div>
          <span className={styles.title}>Round</span>: <span>The completion of the activity for the specified group of people</span>
        </div>
        <div>
          <span className={styles.title}>Wave</span>: <span>A smaller activity within a round</span>
        </div>
        <br />
      </div>
    </>
  )
}

export default SheetGameEvent;