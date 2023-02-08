import React from 'react'

const NameButton = (props) => {
  return (
   <>
   <button onClick={() => {
    props.transferData()
   }}>{props.name}</button>
   </>
  )
}

export default NameButton
