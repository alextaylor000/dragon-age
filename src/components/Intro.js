import React from 'react'
import {Button} from 'components/Button'

export const Intro = ({onClick}) => {
  return (
    <div>
      <img src='/images/flamingline.gif' />
      <h1>dRAgOn aGe :: inQUIZition</h1>
      <hr />
      <img src='/images/dragon4.gif' />
      <img src='/images/dragon4.gif' />
      <img src='/images/dragon4.gif' />
      <Button handleClick={onClick} text="<< PLAY >>" />
      <hr />
      <img src='/images/flamingline.gif' />
      <br />
      ~~ another stunning site by <a href='https://twitter.com/mctaylorpants'>@mctaylorpants</a> ~~
    </div>
  )
}
