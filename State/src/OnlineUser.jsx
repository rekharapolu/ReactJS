import React from 'react'
import { useState } from 'react'

const OnlineUser = () => {
  let [isOnline,setIsOnline]=useState(false);
  console.log(isOnline);
    let Status=()=>{
        if(isOnline){
            setIsOnline(false)
        }else{
            setIsOnline(true)
        }
    }
    if (isOnline) {
        return<>
        <h1>User is Online</h1>
            <button onClick={Status}>Click For Offline</button>
        </>
    }else{
        return<>
        <h1>User is Offline</h1>
            <button onClick={Status}>Click For Online</button>
        </>
    }

}

export default OnlineUser