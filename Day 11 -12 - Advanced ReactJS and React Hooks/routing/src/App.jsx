import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Animation from './components/Animation'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <nav>
        <Link to="/">Home</Link> {"  |  "}
        <Link to="/employees">Employee</Link>
        
       </nav>
       <Animation/>
       </div>
    </>
  )
}

export default App
