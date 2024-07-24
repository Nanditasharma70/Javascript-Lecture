import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [Counter, setCounter] =useState(15);

  // let Counter = 15

  const addValue = () =>{
    console.log("value added", Counter);
    // Counter = Counter + 1
    setCounter(Counter + 1 )
  }

  const removeValue = () =>{
    console.log("value removed", Counter);
    // Counter = Counter - 1
    setCounter(Counter - 1 )
  }

  return (
    <>
    <h1>I  am start learning Hooks..... </h1>
    <h2>Counter vlaue:{Counter}</h2>
    <div>   
      <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    <Counter/>
    
    </div>


    </>
  )
}

export default App
