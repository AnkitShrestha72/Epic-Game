import React from 'react'
import Button from './Buttton'


const Decrement = (props) => {
  
  return (
    <div>
      <Button incDre = {props.dataFun} name="Decrement"/>
    </div>
  )
}


export default Decrement
