import React from 'react'
// import styles from './WhatIsProvided.module.css';
import TwoColumnList from './components/TwoColumnList';

type WhatToBringProps = {

}

const items = [
  "comfy play clothes",
  "comfy play shoes",
  "hat",
  "sunglasses",
  "sunscreen" ,
  "extra clothes"
]

const WhatToBring: React.FC<WhatToBringProps> = () => {
  return (
    <>
      <h2>What to Bring</h2>
      <hr />
      <div>
        <TwoColumnList items={items} />
      </div>
    </>
  )
}

export default WhatToBring;