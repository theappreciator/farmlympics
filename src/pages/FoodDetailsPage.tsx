import React from 'react'

import {
  createColumnHelper,
} from '@tanstack/react-table'

import type { FoodEvent, Grocery } from '../types';

import allPeople from '../data/peeps';
import allFood from '../data/food';

import ArrivalsForFood from '../components/ArrivalsForFood';
import SortableTable from '../components/SortableTable';
import NestedList from '../components/NestedList';

export type FoodDetailsPageProps = {
  eventId?: string
  foodEvent?: FoodEvent;
};

const FoodDetailsPage: React.FC<FoodDetailsPageProps> = ({ eventId }) => {

  const foundEvent = allFood.find(e => e.id === eventId);

  const columnHelper = createColumnHelper<Grocery>();

  const columns = [
    columnHelper.accessor('name', {
      header: () => <div style={{ textAlign: "left" }}>Item</div>,
      cell: info => <div style={{ textAlign: "left" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('preferredStore', {
      header: () => <div style={{ textAlign: "center" }}>Store</div>,
      cell: info => <div style={{ textAlign: "center" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('qty', {
      header: () => <div style={{ textAlign: "right" }}>Qty</div>,
      cell: info => <div style={{ textAlign: "right" }}>{info.getValue()}</div>,
    }),
  ]

  return (
    <>
      {!foundEvent && <div>Event not found: {eventId}</div>}
      {foundEvent && (
        <>
          <h2>Meal: {foundEvent.day} - {foundEvent.name}</h2>
          {foundEvent.info.length > 0 && (
            <>
              <h3>Info</h3>
              <NestedList data={foundEvent.info} accessorFn={d => d.toString()}/>
            </>
          )}
          {foundEvent.menu.length > 0 && (
            <>
              <h3>Menu</h3>
              <NestedList data={foundEvent.menu} accessorFn={d => d.name}/>
            </>
          )}
          <ArrivalsForFood people={allPeople} day={foundEvent.day} meal={foundEvent.meal} />
          {foundEvent.items.length > 0 && (
            <>
              <h3>Groceries</h3>
              <br />
              <SortableTable data={foundEvent.items || []} columns={columns} />
            </>
          )}
          <br />
        </>
      )};
    </>
  )
}

export default FoodDetailsPage;