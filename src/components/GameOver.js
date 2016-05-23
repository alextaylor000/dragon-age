import React from 'react'
import {Button} from 'components/Button'

export const GameOver = ({onReset, rounds, numCorrect}) => {
  const resultMessage = (rounds, numCorrect) => {
    const pct = numCorrect / rounds
    if (pct >= 0.85) {
      return "WOW U R GOOD YOU MUST LUV DARGNS"
    } else if (pct > 0.65) {
      return "UR DRAGGEN KNOWLEDGE NEEDS SUM WORK"
    } else if (pct > 0.25) {
      return "U R A EMBARRASSMINT"
    } else {
      return "U ACTUALLY GOT NONE RITE. KILL URSELF"
    }
  }

  const resultSummary = (rounds, numCorrect) => {
    return (
      <div>
      <img src='/images/flamingline.gif' />
      <div>
        <h2 style={{color: 'white', border: '2px dashed red'}}>{resultMessage(rounds, numCorrect)}</h2>
      </div>
        <hr />
        <p><b>Correct: {numCorrect}</b></p>
        <p><b>Incorrect: {rounds - numCorrect}</b></p>
      </div>
    )
  }

  return (
    <div>
      <h1>GAME OVER</h1>
      {resultSummary(rounds, numCorrect)}
      <hr />
      <img src='/images/DRAGON.gif'/>
      <img src='/images/DRAGON.gif'/>
      <Button handleClick={onReset} text="<< PLAY AGAIN >>" />
    </div>
  )
}
