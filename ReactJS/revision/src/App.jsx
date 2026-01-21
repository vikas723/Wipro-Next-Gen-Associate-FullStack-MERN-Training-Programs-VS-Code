import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inventory from "./components/Inventory";
import Product from "./components/Product";
import ProductList from './components/ProductList';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="min-h-screen flex items-center justify-center">
          <Inventory />
      </div>
      <div>
        {/*from parent passing the data as a props to a product child*/}
        <Product  productname="Laptop" productprice = {70000}/>
         <Product  productname="Mobile" productprice = {20000}/>
         <Product  productname="Keyboard" productprice = {1000}/>
         
          <h1> Product List </h1>
            <ProductList/>
      </div>
      
      <div>
         {/*from parent passing the data as a props to a product child*/}
         <Employee name="Vikas" role="Software Engineer"/>
         <Employee name ="Vihaan" role="QA Engineer"/>
         <Employee name="Viyas" role =" UI Developer"/>

        <h1>Employee List</h1>
   
        <EmployeeList/>
        
      </div>



    </>
  )
}

export default App
