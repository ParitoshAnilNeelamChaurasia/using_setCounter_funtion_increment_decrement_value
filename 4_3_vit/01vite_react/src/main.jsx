import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return (
    <div>
      <h1>
        Custom App
      </h1>
    </div>
  )
}

const ReactElement = {
  type : 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const anotherElement = (
  <a href = "https://google.com" target = '_blank'> Visit Google</a>
)

// creating react element for REACT -> we have to use react

/* 
-> tag
-> link
-> text
*/

const React_Element = React.createElement(
  'a',
  {
    href: 'https://google.com',target: '_blank'
  },
  'click me to visit google'         // text expected after all properties
)

// render used here is of react -> not our personal render
// personal render example  
// customRender(reactElement,mainContainer)

ReactDOM.createRoot(document.getElementById('root')).
render(
  // can add MyApp function in main.jsx -> as done above
     
    // ReactElement    // can't run this -> 
    // <MyApp />

    React_Element()
  
)
