// {username} -> evaluated expression

// can't write if else inside evaluated expression

import Chai from "./chai"

function App() {

  const username = "chai aur code"
  return (
    <>
    <Chai/>
    <h1>chai aur code {username}</h1>
    <p>test para</p>
    </>
  )
}

export default App
