import React from 'react'
import {Button} from 'components/Button'

export const Intro = ({onClick}) => {
  return (
    <div>
      <img src='/images/flamingline.gif' />
      <h1>dRÅgĘń aGe :: inQŪĮŽîshuñ</h1>
      <hr />
      <Button handleClick={onClick} text="<< PLAY >>" />
      <hr />
      <img src='/images/flamingline.gif' />
      <br />
      ~~ another stunning site by <a href='https://twitter.com/mctaylorpants'>@mctaylorpants</a> ~~
    </div>
  )
}
