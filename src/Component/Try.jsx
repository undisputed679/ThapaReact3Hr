import React from "react";
import { useState } from "react";

function Try() {

    const [value,setValue]=useState("")
    const [show,setShow]=useState("hello")
    const [list,setList]=useState([])
    // const handleCLickNow=(e)=>{
    //   {console.log(e.target.value)}
    //     setValue=e.target.value;
    // }
    const handleChange=(e)=>{
      e.preventDefault();
      setValue(e.target.value)   
    }
    const handleShow=(e)=>{
      e.preventDefault();
      setShow(value);
      setList([value,...list])
    }
  return <div>
    
    <div style={{color: "red",backgroundColor: "white",fontSize:38}}>
      {list.map((Element)=>{
        <ul><li>{Element}</li></ul>     
      })
      }
    </div>
    <div style={{color: "red",backgroundColor: "white",fontSize:38}}>
        {list.map((ele)=>{
          <ul>
            <li>{ele}</li>
          </ul>
        })}
    </div>
    <form action="">
      <input type="text" onChange={handleChange} />
      <button onClick={handleShow} >click me</button>
    </form>
    
    

        {/* <input type="text" name="" id="" />
        onClick={() => setCount(count + 1)}
        <button>click</button> */}
        
     

  </div>;
}

export default Try;
