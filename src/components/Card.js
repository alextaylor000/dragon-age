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
      return (<div>
                {ages.map((age) => <span key={age} style={{margin: '25px', backgroundColor: 'yellow', border: '2px solid white', padding: '30px', cursor: 'pointer'}} onClick={this.verifyGuess} value={age}><a href='#'>{age.toLocaleString()} years old</a></span>)}
              </div>)
    }

    const imgContainerStyle = {
      border: '3px dashed red',
      minHeight: '325px'
    }

    return (
      <div class="dragon-card">
        <h1><img src="/images/bigfire.gif" width="75"/>GUESS TEH DRAGOn AGE<img src="/images/bigfire.gif" width="75"/></h1>
        <div style={imgContainerStyle}><img src={`/images/${this.props.dragon.image}`} /></div>
        {renderGuesses()}
      </div>
    )
  }
}
