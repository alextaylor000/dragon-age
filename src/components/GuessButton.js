import React from 'react'

export const GuessButton = ({age, onClick}) => {
  return <span
    key={age}
    onClick={onClick}
    style={{margin: '25px', backgroundColor: 'yellow', border: '2px solid white', padding: '30px', cursor: 'pointer'}}
    className='guess'>
      <a href='#' value={age}>
        {age.toLocaleString()} years old
      </a>
  </span>
}
