import React from 'react'
import {Button} from 'components/Button'
import {Card} from 'components/Card'

const DRAGONS = [
  { name: 'dragon1', age: 34 }
]

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'start',
      showPlayButton: true
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.renderButton = this.renderButton.bind(this)
    this.renderCard = this.renderCard.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
  }

  handleButtonClick(e) {
    this.setState({
      mode: 'play',
      showPlayButton: false
    })
  }

  handleGuess(guess) {
    console.log(`Your guess was ${guess.target.value}`)
  }

  renderButton() {
    if (this.state.showPlayButton) {
      return (<Button handleClick={this.handleButtonClick} text="Play" />)
    }
  }

  renderCard() {
    return (<Card dragon={DRAGONS[0]} onGuess={this.handleGuess} />)
  }

  renderCurrentState() {
    switch(this.state.mode) {
      case 'start':
        return this.renderButton()
        break
      case 'play':
        return this.renderCard()
        break
      case 'finish':
        break
      default:
        break
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to Dragon Age</h2>
        {this.renderCurrentState()}
      </div>
    )
  }
}
