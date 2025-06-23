import React, { useRef } from 'react'
import { useState } from 'react';
import koi from'./Assets/videoplayback.mp4'

const KoiKoi = () => {
    let [play,setPlay]=useState(false)
    let videoref=useRef();
    let playorpause=()=>{
        setPlay(!play)  //!toggle
        if(play){
            videoref.current.play()
        }else{
            videoref.current.pause()
        }
    }

  return (
    <div className=' mx-auto w-[100%]' hover="{()=>{playorpause()}}>{play?'play':'pause'}" >
        <video src={koi} controls ref={videoref} className='h-[80%] w-[80%]'></video>
        <button onClick={()=>{playorpause()}}>{play?"play":"pause"}</button>
    </div>
  )
}

export default KoiKoi