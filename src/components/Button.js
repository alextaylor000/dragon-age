import React from 'react'

export const Button = ({handleClick, text}) => {
  return (<h3><a href='#' onClick={handleClick}>{text}</a></h3>)
}
