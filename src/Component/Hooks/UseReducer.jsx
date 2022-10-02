import React from "react";
import { useReducer } from "react";

function UseReducer() {
    const reducer=(state,action)=>{
        if(action.type==="INCR"){
            state+=1
        }
        if(action.type==="DECR"){
            state-=1
        }
        return state;
    }
    const initialData=10;
    const [state,dispatch]=useReducer(reducer,initialData);
  return <div>
    <div className="center_div">
        <p>{state}</p>
        <div className="button2" 
        onClick={()=>dispatch({type:"INCR"})}>
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" 
         onClick={()=>dispatch({type:"DECR"})}>
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
    </div>
  </div>;
}

export default UseReducer;
