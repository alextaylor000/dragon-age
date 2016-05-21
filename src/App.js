import React from 'react'
import {Button} from 'components/Button'
import {Card} from 'components/Card'
import {GameOver} from 'components/GameOver'

const DRAGONS = [
  { name: 'dragon1', age: 34 },
  { name: 'dragon2', age: 450 }
]

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'start',
      showPlayButton: true,
      round: 0,
      numCorrect: 0
    }

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.renderButton = this.renderButton.bind(this)
    this.renderCard = this.renderCard.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
    this.getMode = this.getMode.bind(this)
  }

  handleButtonClick(e) {
    this.setState({
      mode: 'play',
      showPlayButton: false
    })
  }

  handleGuess(guess) {
    let thisRound = guess ? 1 : 0
    this.setState({
      numCorrect: this.state.numCorrect + thisRound,
      round: ++this.state.round,
      mode: this.getMode()
    })
  }

  getMode() {
    if (DRAGONS.length === 0) return 'finish'
    return this.state.mode
  }

  renderButton() {
    if (this.state.showPlayButton) {
      return (<Button handleClick={this.handleButtonClick} text="Play" />)
    }
  }

  renderCard() {
    const thisDragon = DRAGONS.pop()
    return (<Card dragon={thisDragon} onGuess={this.handleGuess} />)
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
        return <GameOver />
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
