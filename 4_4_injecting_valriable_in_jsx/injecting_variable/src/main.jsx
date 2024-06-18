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

// creating react element for REACT

const React_Element = React.createElement(
  'a',
  {
    href: 'https://google.com',target: '_blank'
  },
  'click me to visit google'         // text expected after all properties
)



ReactDOM.createRoot(document.getElementById('root')).
render(
 

    React_Element()
  
)
