import React from 'react'

export const GameOver = ({onReset, rounds, numCorrect}) => {
  const resultMessage = (rounds, numCorrect) => {
    const pct = numCorrect / rounds
    if (pct >= 0.85) {
      return "WOW U R GOOD YOU MUST LUV DARGNS"
    } else if (pct > 0.65) {
      return "UR DRAGEN NOLLEDGE NEEDS SUM WERK BRAH"
    } else if (pct > 0.25) {
      return "U R A EMBARRASSMINT"
    } else {
      return "U ACTUALLY GOT NONE RITE. KILL URSELF"
    }
  }

  const resultSummary = (rounds, numCorrect) => {
    return (
      <div>
        <h4>Score</h4>
        <hr />
        <p><b>Correct: {numCorrect}</b></p>
        <p><b>Incorrect: {rounds - numCorrect}</b></p>
      </div>
    )
  }

  return (
    <div>
      <h1>GAME OVER</h1>
      <h2>{resultMessage(rounds, numCorrect)}</h2>
      {resultSummary(rounds, numCorrect)}
      <hr />
      <a href='#' onClick={onReset}>PLAY AGAIN</a>
    </div>
  )
}
