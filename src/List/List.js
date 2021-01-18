import React from 'react'
import styles from '../styles.module.css'

function List({ groupName, members = [] }) {
    return (
      <div>
        <h1>1.0.2</h1>
        <h5>
          Group: <em>{groupName}</em>
        </h5>
        <ul>
          <p>Members</p>
          {members.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default List;