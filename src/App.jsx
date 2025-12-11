import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  }
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>Increment</button>
    </div>
  )
}

export default App
