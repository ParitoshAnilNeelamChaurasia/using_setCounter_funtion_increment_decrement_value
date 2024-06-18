// useState -> used to change the state

// change is propagated in UI / virtual dom

// default value -> can be any string , function , object

// gave 2 states [val1 , val2]

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [counter , setCounter] = useState(15)

  // const gave error -> can't able to change value
  

  /* ***************************************** */

  // FUNCTION
  // setCounter method -> update the counter value whereever its present
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("clicked", counter);
    counter = counter + 1;

    if(counter > 20)
      counter = 20;

    setCounter(counter);
  }

  const removeValue = () => {
    if(counter < 0)
      counter = 0;
    setCounter(counter-1)
  }



  return (
    <div>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>addValue{counter}</button>
      <br />
      <button onClick={removeValue}>remove value{counter}</button>
    </div>
  );
}

export default App;
