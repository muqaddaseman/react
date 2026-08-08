import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const addValue = () => {
    console.log('Add Value button clicked', Math.random())
    setCounter(counter + 1)
  }
  const valueRemoved = () => {
    console.log('Remove Value button clicked', Math.random())
    setCounter(counter - 1)
  }

  return (
   <>
   <h1>Counter App</h1>
   <h3>Counter value: {counter} </h3>
   <button onClick={addValue}>
    Add Value{counter}</button>
   <br />
   <br />
   <button onClick = {valueRemoved}>Remove Value{counter}</button>
   </>
  )
}

export default App
