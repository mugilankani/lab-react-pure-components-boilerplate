import { useState } from 'react'
import PureCounterComponent from './Components/PureCounterComponent'
import SimpleCounterComponent from './Components/SimpleCounterComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      < SimpleCounterComponent />
      < PureCounterComponent/>
    </div>
  )
}

export default App
