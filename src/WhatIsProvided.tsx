import React from 'react'
// import styles from './WhatIsProvided.module.css';
import TwoColumnList from './components/TwoColumnList';

type WhatIsProvidedProps = {

}

const items = [
  "shirts",
  "water",
  "drinks",
  "food",
  "sunscreen",
  "FUN!",
]

const WhatIsProvided: React.FC<WhatIsProvidedProps> = () => {
  return (
    <>
      <h2>What is Being Provided</h2>
      <hr />
      <div>
        <TwoColumnList items={items} />
      </div>
    </>
  )
}

export default WhatIsProvided;