import React from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick={() => {
      props.incDre()
    }} >{props.name}</button>
    
    </>
  )
}

export default Button
