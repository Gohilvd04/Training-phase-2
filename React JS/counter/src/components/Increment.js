import React, { useState } from 'react'

function Increment() {
    const [incr, setIncr] = useState(0);

    const  handleIncrement = ()=>{
        setIncr(incr + 1);
    }
  return (
    <div>
        <p>{incr}</p>
        <button onClick={ handleIncrement }>Increment</button>
    </div>
  )
}

export default Increment