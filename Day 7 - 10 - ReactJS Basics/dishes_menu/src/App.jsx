// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import Header from './components/Header'
import MenuCard from '../../dishes_menu/src/components/MenuCard'
import Footer from '../../dishes_menu/src/components/Footer'

import "./App.css";
function App(){
  return (
    <>
      <Header/>
      <h3 className="text-center mt-4 text-xl">
        Welcome to our Hotel Menu
      </h3> 
      <div className="flex flex-wrap justify-center mt-4">
        <MenuCard cuisine="Indian" dish="Butter Naan" price="100" />
        <MenuCard cuisine="Chinese" dish="Veg Manchurian" price="220" />
        <MenuCard cuisine="Italian" dish="Margherita Pizza" price="450" />
        <MenuCard cuisine="South Indian" dish="Masala Dosa" price="180" />
        <MenuCard cuisine="Mexican" dish="Tacos" price="260" />
        <MenuCard cuisine="Dessert" dish="Chocolate Brownie" price="150" />
      </div>
      <Footer/>
    </>
  )
}
export default App;