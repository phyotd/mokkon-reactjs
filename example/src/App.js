import React from 'react'

import { List } from '@mokkon/reactjs'
import '@mokkon/reactjs/dist/index.css'


const App = () => {
  const pediatricians = [
    'Michael Lopez',
    'Sally Tran',
    'Brian Lu',
    'Troy Sakulbulwanthana',
    'Lisa Wellington',
  ]

  const psychiatrists = [
    'Miguel Rodriduez',
    'Cassady Campbell',
    'Mike Torrence',
  ]
  return <div>
    <div className="root">
      <div className="listContainer">
        <List groupName="Pediatricians" members={pediatricians} />
      </div>
      <div className="listContainer">
        <List groupName="Psychiatrists" members={psychiatrists} />
      </div>
    </div>  </div>
}

export default App
