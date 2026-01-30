import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegForm from './components/RegForm'
import UncontrolledForm from './components/UncontrolledForm'
import RegistrationForm from './components/RegistrationForm'
import MixedRegistrationForm from './components/MixedRegistrationForm'

import JsonRegistrationControlled from "./components/JsonRegistrationControlled";
import JsonRegistrationUncontrolled from "./components/JsonRegistrationUncontrolled";
import CourseList from "./components/CourseList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br/>
    <JsonRegistrationControlled/>

    <JsonRegistrationUncontrolled/>

    <CourseList/>


      {/* <RegForm/>

      <br/>

      <UncontrolledForm/>

      <br/>

      <RegistrationForm/>

      <br/>

      <MixedRegistrationForm/>

      <br/> */}
      


    </>
    
  )
}

export default App
