import React from 'react'

export const GuessButton = ({age, onClick}) => {
  return <span
    key={age}
    onClick={onClick}
    style={{margin: '25px', backgroundColor: 'yellow', border: '2px solid white', padding: '30px', cursor: 'pointer'}}
    className='guess'
    value={age}>
      <a href='#'>
        {age.toLocaleString()} years old
      </a>
  </span>
}
