import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./style.css"

function PlayGround() {
    const[myNum,setMyNum]=useState(0);
    useEffect(()=>{
        document.title=`Chats(${myNum})`
    })
  return <div>
    <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" 
        onClick={()=>setMyNum(myNum+1)}>
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
    </div>
    
  </div>;
}

export default PlayGround;
