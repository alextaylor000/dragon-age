import React from 'react'
import {GuessButton} from 'components/GuessButton'
import {shuffle} from 'lodash/collection'
import {randomAge} from 'utils/randomAge'

export class Card extends React.Component {
  constructor(props) {
    super(props)
    this.verifyGuess = this.verifyGuess.bind(this)
  }

  verifyGuess(guess) {
    this.props.onGuess(guess.target.value == this.props.dragon.age)
  }

  render() {
    const guesses = shuffle([this.props.dragon.age, randomAge(), randomAge()])
    const imgContainerStyle = {
      border: '3px dashed red',
      minHeight: '325px'
    }

    return (
      <div class="dragon-card">
        <h1><img src="/images/bigfire.gif" width="75"/>GUESS TEH DRAGOn AGE<img src="/images/bigfire.gif" width="75"/></h1>
        <div style={imgContainerStyle}><img src={`/images/${this.props.dragon.image}`} /></div>
        {guesses.map((age) => { return <GuessButton age={age} key={age} onClick={this.verifyGuess} />})}
      </div>
    )
  }
}
