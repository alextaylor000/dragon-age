import React from 'react'
import {Button} from 'components/Button'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showPlayButton: true}

    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.renderButton = this.renderButton.bind(this)
  }

  handleButtonClick(e) {
    this.setState({showPlayButton: false})
  }

  renderButton() {
    if (this.state.showPlayButton) {
      return (<Button handleClick={this.handleButtonClick} text="Play" />)
    }
  }

  renderCurrentState() {
    switch(this.state.mode) {
      case 'start':
        return renderButton()
      case 'guess':
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
        {this.renderButton()}
      </div>
    )
  }
}
