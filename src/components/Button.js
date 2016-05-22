import React from 'react'

export const Button = ({handleClick, text}) => {
  const boxStyle = { backgroundColor: 'yellow' }
  return (<h2 style={boxStyle}><a href='#' onClick={handleClick}>{text}</a></h2>)
}
