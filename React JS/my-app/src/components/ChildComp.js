import React from 'react'

function ChildComp(props) {
  return (
    <div>
        <button onClick = {() => props.handleParent('Vd')}>Greet</button>
    </div>
  )
}

export default ChildComp