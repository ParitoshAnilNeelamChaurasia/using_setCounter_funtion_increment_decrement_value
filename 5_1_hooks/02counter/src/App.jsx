// UI updation is done using react -> humans can't control it


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter = 15 ;
  
  // arrow function making
  const addValue = () => {
    console.log("clicked",Math.random())
    console.log("value added" , Math.random()) ;
  }


  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value : 5</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button>remove value</button>
    </>
  )
}

export default App
