import React from 'react'
// import styles from './TShirts.module.css'

import {
  createColumnHelper,
} from '@tanstack/react-table'

import { Teams } from '../data/peeps';
import type { Person, Shirt } from '../types';
import SortableTable from './SortableTable';

type TShirtsCountBySize = {
  shirt: Shirt;
  teamA: Person[],
  teamB: Person[],
  unk: Person[],
}

type TShirtsProps = {
    people: Person[];
};

const columnHelper = createColumnHelper<TShirtsCountBySize>()

const columns = [
  columnHelper.accessor('shirt', {
    header: () => <span>Shirt Size</span>,
    cell: info => info.getValue().display,
    id: "shirt-name"
  }),
  columnHelper.accessor('shirt', {
    header: () => <span>Shirt Size</span>,
    cell: info => info.getValue().code,
    id: "shirt-code"
  }),
  columnHelper.accessor('teamA', {
    header: () => <span>Team Horns</span>,
    cell: info => info.getValue().length,
    footer: info => `Team Horns: ${info.table.getFilteredRowModel().rows.map(r => r.original.teamA.length).reduce((acc, val) => acc + val, 0)} shirts`
  }),
  columnHelper.accessor('teamB', {
    header: () => <span>Team Flock</span>,
    cell: info => info.getValue().length,
    footer: info => `Team Flock: ${info.table.getFilteredRowModel().rows.map(r => r.original.teamB.length).reduce((acc, val) => acc + val, 0)} shirts`
  }),
  columnHelper.accessor('unk', {
    header: () => <span>?</span>,
    cell: info => info.getValue().length,
    footer: info => `TBD: ${info.table.getFilteredRowModel().rows.map(r => r.original.unk.length).reduce((acc, val) => acc + val, 0)} shirts`
  }),
]

const TShirts: React.FC<TShirtsProps> = ({ people }) => {

  const shirtsBySize: TShirtsCountBySize[] = [];
  
  people.forEach(p => {

    let shirtBySize = shirtsBySize.find(s => s.shirt.code === p.shirt.code);
    if (!shirtBySize) {
        shirtBySize = {
            shirt: p.shirt,
            teamA: [],
            teamB: [],
            unk: [],
        };
        shirtsBySize.push(shirtBySize);
    }

    switch (p.team.name) {
        case Teams.TeamAMain.name:
            shirtBySize.teamA.push(p);
            break;
        case Teams.TeamBMain.name:
            shirtBySize.teamB.push(p);
            break;
        default:
            shirtBySize.unk.push(p);
            break;
    }

  });

  const sortedShirtsBySize = shirtsBySize.sort((a, b) => a.shirt.order - b.shirt.order);

  return (
    <>
      <h2>Shirt Size Count</h2>
      <SortableTable data={sortedShirtsBySize} columns={columns} />
    </>
  )
}

export default TShirts;