import React from 'react'
import {GuessButton} from 'components/GuessButton'
import {shuffle} from 'lodash/collection'
import {randomAge} from 'utils/randomAge'

export class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imageLoaded: false }
    this.verifyGuess = this.verifyGuess.bind(this)
    this.renderGuesses = this.renderGuesses.bind(this)
  }

  verifyGuess(age) {
    this.props.onGuess(age == this.props.dragon.age)
  }

  renderGuesses() {
    const guesses = shuffle([this.props.dragon.age, randomAge(), randomAge()])
    if (this.state.imageLoaded) {
      return guesses.map((age) => { return <GuessButton age={age} key={age} onClick={() => this.verifyGuess(age)} />})
    }
  }

  render() {
    const imgContainerStyle = {
      border: '3px dashed red',
      minHeight: '325px'
    }

    return (
      <div class="dragon-card">
        <h1><img src="/images/bigfire.gif" width="75"/>GUESS TEH DRAGOn AGE<img src="/images/bigfire.gif" width="75"/></h1>
        <p style={{clear: 'both'}}><a href={this.props.dragon.url} target='new'>where this dragon from???1</a></p>
        <div style={imgContainerStyle}>
          <img onLoad={() => this.setState({ imageLoaded: true})} src={`/images/${this.props.dragon.image}`} />
        </div>
        {this.renderGuesses()}
      </div>
    )
  }
}
