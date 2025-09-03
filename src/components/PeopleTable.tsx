import React from 'react'
// import styles from './PeopleTable.module.css'

import {
  createColumnHelper,
} from '@tanstack/react-table'
import { format } from 'date-fns'

import type { Person } from '../types';
import { sleepingDisplay } from '../helpers/tableUtility';
import SortableTable from './SortableTable';

type PeopleTableProps = {
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
  columnHelper.accessor('shirt', {
    header: () => <span>Shirt<br/>Size</span>,
    cell: info => info.getValue().display,
  }),
  columnHelper.accessor('team', {
    header: () => <span>Team</span>,
    cell: info => info.getValue().name,
  }),
  columnHelper.accessor('arrival', {
    header: () => <span>Arrive<br/>Time</span>,
    cell: info => {
      const value = info.getValue()
      return !value ? '?' : value === 'all' ? value : format(new Date(value), 'eee, haaaaa')
    }
  }),
  columnHelper.accessor('departure', {
    header: () => <span>Depart<br/>Time</span>,
    cell: info => {
      const value = info.getValue()
      return !value ? '?' : value === 'all' ? value : format(new Date(value), 'eee, haaaaa')
    }
  }),
  columnHelper.accessor('sleeping.friday', {
    header: () => <span>Friday<br/>Sleep</span>,
    cell: info => sleepingDisplay(info.getValue()),
  }),
  columnHelper.accessor('sleeping.saturday', {
    header: () => <span>Saturday<br/>Sleep</span>,
    cell: info => sleepingDisplay(info.getValue()),
  }),
  columnHelper.accessor('sleeping.sunday', {
    header: () => <span>Sunday<br/>Sleep</span>,
    cell: info => sleepingDisplay(info.getValue()),
  }),
]

const PeopleTable: React.FC<PeopleTableProps> = ({ people }) => {

  return (
    <>
    {people.length > 0 && (
      <>
      <h2>People</h2>
      <SortableTable data={people} columns={columns} />
      </>
    )}
    </>
  )
}

export default PeopleTable