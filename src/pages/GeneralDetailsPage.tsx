import React from 'react'
// import styles from './GeneralDetailsPage.module.css'

import {
  createColumnHelper,
} from '@tanstack/react-table'

import type { GeneralEvent, Grocery } from '../types';

import allPeople from '../data/peeps';
import allEvents from '../data/generalEvents';

import ArrivalsForFood from '../components/ArrivalsForFood';
import SortableTable from '../components/SortableTable';
import NestedList from '../components/NestedList';

export type GeneralDetailsPageProps = {
  eventId?: string
  generalEvent?: GeneralEvent;
};

const GeneralDetailsPage: React.FC<GeneralDetailsPageProps> = ({ eventId }) => {

  const foundEvent = allEvents.find(e => e.id === eventId);

  const columnHelper = createColumnHelper<Grocery>();

  const columns = [
    columnHelper.accessor('name', {
      header: () => <div style={{ textAlign: "left" }}>Item</div>,
      cell: info => <div style={{ textAlign: "left" }}>{info.getValue()}</div>,
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
          <h2>{foundEvent.day} - {foundEvent.name}</h2>
          <h3>Info</h3>
          <NestedList data={foundEvent.info} accessorFn={d => d.toString()}/>
          <h3>Purchase List</h3>
          <br />
          <SortableTable data={foundEvent.items || []} columns={columns} />
          <br/>
          <ArrivalsForFood people={allPeople} day={foundEvent.day} meal={'Other'} />
          <br/>
        </>
      )}
    </>
  )
}

export default GeneralDetailsPage;