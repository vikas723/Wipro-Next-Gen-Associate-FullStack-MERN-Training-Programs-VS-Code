
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EmployeeService } from './services/EmployeeService'
import EmployeeList from "./components/EmployeeList"
import { ServiceContext } from './context/ServiceContext'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        {/* <EmployeeList service={EmployeeService}/>  => Injecting EmployeeService in EmployeeList, This is using Props method*/} 
        <ServiceContext.Provider value={EmployeeService}> 
          <EmployeeList/>
        </ServiceContext.Provider>
        
       </div>
    </>
  )
}
export default App