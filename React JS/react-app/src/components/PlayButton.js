import React from 'react'
import { useState } from 'react';

function PlayButton({children, message, onPlay, onPause}) {
    const[playing, setPlaying] = useState(true);

    const handleClick = () =>{
        if(playing){
            onPlay();
        } 
        else{
            onPause();
        }
        setPlaying(!playing);
    }
  return (
    <div>
        <button onClick={handleClick}>{children} {playing ? '⏸️' : '▶️'} </button>
    </div>
  )
}

export default PlayButton