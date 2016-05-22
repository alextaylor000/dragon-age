import React from 'react'
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
    const ages = shuffle([this.props.dragon.age, randomAge(), randomAge()])
    const renderGuesses = () => {
      return (<ul>
                {ages.map((age) => <li onClick={this.verifyGuess} key={age} value={age}>{age.toLocaleString()} years old</li>)}
              </ul>)
    }

    return (
      <div class="dragon-card">
        <h3>GUESS TEH AGE</h3>
        <p><img src={`/images/${this.props.dragon.image}`} /></p>
        {renderGuesses()}
      </div>
    )
  }
}
