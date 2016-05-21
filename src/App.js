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
    console.log('handle button click')
    console.log(this)
    this.setState({showPlayButton: false})
  }

  hello(e) {
    console.log('helo')
  }

  renderButton() {
    debugger
    if (this.state.showPlayButton) {
      return (<Button onClick={() => { console.log('hi') }} text="Play" />)
    }
  }

  render() {
    const button = this.state.showPlayButton ? <Button handleClick={this.handleButtonClick} text="hey" /> : ''
    return (
      <div>
        <h2 onClick={this.hello.bind(this)}>Welcome to Dragon Age</h2>
        {button}
      </div>
    )
  }
}
