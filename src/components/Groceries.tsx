import React from 'react'
import styles from './Groceries.module.css';

import {
  createColumnHelper,
} from '@tanstack/react-table'

import type { GroceryToBuy } from '../types';
import SortableTable from './SortableTable';

type GroceriesProps = {
  items: GroceryToBuy[];
}

const Groceries: React.FC<GroceriesProps> = ({ items }) => {

  const columnHelper = createColumnHelper<GroceryToBuy>();

  const columns = [
    columnHelper.accessor('name', {
      header: () => <div style={{ textAlign: "left" }}>Item</div>,
      cell: info => <div style={{ textAlign: "left" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('owners', {
      header: () => <div style={{ textAlign: "left" }}>Owner</div>,
      cell: info => <div style={{ textAlign: "left" }}>{info.getValue().map(o => <div>{o.name}</div>)}</div>,
      sortingFn: (rowA, rowB, _) => rowA.original.owners[0]?.name.localeCompare(rowB.original.owners[0]?.name)
    }),
    columnHelper.accessor('day', {
      header: () => <span style={{ textAlign: "left" }}>Day</span>,
      cell: info => <span style={{ textAlign: "left" }}>{info.getValue()}</span>,
    }),
    columnHelper.accessor('sourceName', {
      header: () => <span style={{ textAlign: "left" }}>Event</span>,
      cell: info => <span style={{ textAlign: "left" }}>{info.getValue()}</span>,
    }),
    // columnHelper.accessor('preferredStore', {
    //   header: () => <span style={{ textAlign: "left" }}>Store</span>,
    //   cell: info => <span style={{ textAlign: "left" }}>{info.getValue()}</span>,
    // }),
    columnHelper.accessor('qty', {
      header: () => <div style={{ textAlign: "right" }}>Qty</div>,
      cell: info => <div style={{ textAlign: "right" }}>{info.getValue()}</div>,
    }),
    columnHelper.accessor('percentUsed', {
      header: () => <div style={{ textAlign: "right" }}>% Used</div>,
      cell: info => <div style={{ textAlign: "right" }}>{info.getValue() !== undefined ? info.getValue() + "%" : ""}</div>,
    }),
  ]

  return (
    <div className={styles.container}>
      <h2>Groceries</h2>
        <SortableTable data={items || []} columns={columns} />
    </div>
  )
}

export default Groceries;