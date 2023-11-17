import React from "react";
import {useState} from "react";

function Counts(){
    const [number1,setNumber1] = useState(10);
    const [number2,setNumber2] = useState(10);


    const countNumber1=()=>{
        setNumber1(number1 => number1 + 1)
    }
    const subtractionNumber1=()=>{
        setNumber1(number1 => number1 - 1)
    }
    const countNumber2=()=>{
        setNumber2(number2 => number2 + 5)
    }
    const subtractionNumber2=()=>{
        setNumber2(number2 => number2 - 5)
    }
   return(
       <>
           <div style={{
               color: "red",
               textAlign: "center"
           }}>
               <h1>Count: {number1}</h1>
               <button onClick={countNumber1}>Add 1</button>
               <button onClick={subtractionNumber1}>subtraction 1</button>

           </div>
           <div style={{
               color: "red",
               textAlign: "center"
           }}>
               <h1>Count: {number2}</h1>
               <button onClick={countNumber2}>Add 2</button>
               <button onClick={subtractionNumber2}>subtraction 2</button>

           </div>
       </>
   )
}

export default Counts;