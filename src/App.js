import React from 'react'
import {selectDragons} from 'utils/selectDragons'
import {Button} from 'components/Button'
import {Card} from 'components/Card'
import {GameOver} from 'components/GameOver'

const DRAGONS = [
  { name: 'dragon1', age: 34 },
  { name: 'dragon2', age: 450 },
  { name: 'dragon3', age: 203 },
  { name: 'dragon4', age: 87 },
  { name: 'dragon5', age: 45 },
  { name: 'dragon6', age: 91 },
  { name: 'dragon7', age: 1000 }
]

const NUM_ROUNDS = 3

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.renderButton = this.renderButton.bind(this)
    this.renderCard = this.renderCard.bind(this)
    this.handleGuess = this.handleGuess.bind(this)
    this.getMode = this.getMode.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  initialState() {
    return {
      mode: 'start',
      showPlayButton: true,
      round: 0,
      numCorrect: 0,
      dragons: selectDragons(DRAGONS, NUM_ROUNDS)
    }
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
    if (this.state.round === NUM_ROUNDS) return 'finish'
    return this.state.mode
  }

  renderButton() {
    if (this.state.showPlayButton) {
      return (<Button handleClick={this.handleButtonClick} text="Play" />)
    }
  }

  renderCard() {
    const thisDragon = this.state.dragons[this.state.round]
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
        return <GameOver onReset={this.handleReset} rounds={NUM_ROUNDS} numCorrect={this.state.numCorrect} />
        break
      default:
        break
    }
  }

  handleReset() {
    this.setState(this.initialState())
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
