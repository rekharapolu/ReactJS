import React from 'react'

const EventHandler = () => {
    let sendMoney=()=>{
        console.log("payment successful..!");
    }
    let sentTextMessage=()=>{
        console.log("rs1000 debited from your A/C no. xxxxxx4491");
    }
  return (
    <div>
        <button onClick={()=>{
            //!this is how we add multiple event handlers
            sendMoney();
            sentTextMessage();
        }}>
            Send Bank Statement
        </button>
    </div>
  )
}

export default EventHandler