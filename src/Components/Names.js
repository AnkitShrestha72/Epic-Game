import React from 'react'
import NameButton from './NameButton'

const Names = (props) => {
  return (
    <div>
      <NameButton transferData ={props.namedata} name="Change Name"/>

      
    </div>
  )
}

export default Names
