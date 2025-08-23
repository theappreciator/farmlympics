import React from 'react'
import styles from './TwoColumnList.module.css';

type TwoColumnListProps = {
  items: string[];
}

const TwoColumnList: React.FC<TwoColumnListProps> = ({ items }) => {

  return (
    <>
      <ul className={styles.twoColumnList}>
        {items.map(c => (
          <li>{c}</li>
        ))}
      </ul>
    </>
  )
}

export default TwoColumnList;