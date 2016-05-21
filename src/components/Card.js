import React from 'react'
import {shuffle} from 'lodash/collection'
import {randomAge} from 'utils/randomAge'

export const Card = ({onGuess, dragon}) => {
  const ages = shuffle([dragon.age, randomAge(), randomAge()])
  const renderGuesses = () => {
    return (<ul>
              {ages.map((age) => <li onClick={onGuess} key={age}>{age} years old</li>)}
            </ul>)
  }

  return (
    <div class="dragon-card">
      <h3>How old is this dragon?</h3>
      <p>{dragon.name}</p>
      {renderGuesses()}
    </div>
  )
}
