import React from 'react'
import NameButton from './NameButton'

const UndoName = (props) => {
  return (
    <div>
      <NameButton transferData={props.namedata} name="Undo Name" />
    </div>
  )
}

export default UndoName
