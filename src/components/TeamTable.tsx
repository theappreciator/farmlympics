import React from 'react'
// import styles from './TeamTable.module.css'

import {
  createColumnHelper,
} from '@tanstack/react-table'
import type { Person, Team } from '../types';
import SortableTable from './SortableTable';

type TeamTableProps = {
  team: Team[];
  people: Person[];
};

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('id', {
    header: () => <span>#</span>,
    cell: info => info.row.index + 1,
  }),
  columnHelper.accessor('name', {
    header: () => <span style={{textAlign: "left"}}>Name</span>,
    cell: info => <div style={{textAlign: "left"}}>{info.getValue()}</div>,
  }),
  columnHelper.accessor('generation', {
    header: () => <span>Generation</span>,
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('team', {
    header: () => <span>Team</span>,
    cell: info => info.getValue().name,
    id: "team"
  }),
  columnHelper.accessor('team', {
    header: () => <span>Confirmed</span>,
    cell: info => info.getValue().type === "main" ? "✓" : "",
    id: "conf"
  }),
]

const TeamTable: React.FC<TeamTableProps> = ({ team, people }) => {

  return (
    <>
    {people.length > 0 && (
      <>
      <h2>TEAM {team[0].name}</h2>
        <SortableTable data={people || []} columns={columns} />
      </>
    )}
    </>
  )
}

export default TeamTable