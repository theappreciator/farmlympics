import React from 'react'
import styles from './GameDetailsPage.module.css';

import {
  createColumnHelper,
} from '@tanstack/react-table'

import type { Grocery, GameEvent } from '../types';

import allGames from '../data/games';
import SortableTable from '../components/SortableTable';

export type GameDetailsPageProps = {
  eventId?: string;
  gameEvent?: GameEvent;
};

const GameDetailsPage: React.FC<GameDetailsPageProps> = ({ eventId }) => {

  const foundEvent = allGames.find(e => e.game.id === eventId);

  const columnHelper = createColumnHelper<Grocery>();

  const columns = [
    columnHelper.accessor('name', {
      header: () => <div style={{ textAlign: "left" }}>Item</div>,
      cell: info => <div style={{ textAlign: "left" }}>{info.getValue()}</div>
    }),
    columnHelper.accessor('preferredStore', {
      header: () => <span style={{ textAlign: "center" }}>Store</span>,
      cell: info => <div style={{ textAlign: "center" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('qty', {
      header: () => <span style={{ textAlign: "right" }}>Qty</span>,
      cell: info => <div style={{ textAlign: "right" }}>{info.getValue()}</div>,
    }),
  ]

  return (
    <>
      {!foundEvent && <div>Event not found: {eventId}</div>}
      {foundEvent && (
        <>
          <h2>Game: {foundEvent?.game.name}</h2>
          <h3>What is it?</h3>
          <ul><li>{foundEvent?.game.what}</li></ul>
          <h3>How to win?</h3>
          <ul><li>{foundEvent?.game.winning}</li></ul>
          <h3>How to Play</h3>
          <ul>
            {foundEvent?.game.how?.map(h => {
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
          <h3>Rules</h3>
          <ul>
            {foundEvent?.game.rules?.map(r => {
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
          <h3>Setup</h3>
          <ul>
            {foundEvent?.game.setup?.map(s => (
              <li>{s}</li>
            ))}
          </ul>
          <h3>Time</h3>
          <ul>
            {foundEvent?.game.time?.map(t => (
              <li>{t}</li>
            ))}
          </ul>
          <h3>Items to Bring/Purchase</h3>
          <SortableTable data={foundEvent.items || []} columns={columns} />
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
      )}
    </>
  )
}

export default GameDetailsPage;