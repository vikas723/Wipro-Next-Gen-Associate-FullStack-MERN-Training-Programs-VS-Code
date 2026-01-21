import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Courses from './pages/Courses';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails'
import Contact from './pages/Contact'
import Menu from './components/Menu'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<CourseDetails/>}/> {/* Parameterised by passing id */}
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
