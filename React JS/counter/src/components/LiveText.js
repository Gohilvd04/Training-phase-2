import React, { useState } from 'react'

function LiveText() {
    const [text, setText] = useState("");

    const handleText = (e) =>{
        setText(e.target.value);
    }
    return (
        <div>
            <input type="text" onChange={handleText}/>
            <p>{text}</p>
        </div>
    )
}

export default LiveText