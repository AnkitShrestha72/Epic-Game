import React from 'react'
import Button from './Buttton'

const Increment = (props) => {
  return (
    <div>
      <Button incDre = {props.dataFun} name="Increment"/>
    </div>
  )
}

export default Increment
