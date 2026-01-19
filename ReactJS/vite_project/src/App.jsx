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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from '../../vite_project/src/components/Footer'
import Card from '../../vite_project/src/components/Card'
import MyButton from '../../vite_project/src/components/Button'
import './App.css'

function App() {


  return (
    <>
      <div>
        <Header />
        <h3>Hi , This is the app content.</h3>
        <p> React app content can be added here.</p>
        <div className='flex flex-wrap'>
        <Card cardTitle="React Js Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Full Stack Java Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MEAN Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="MERN Course" cardDescription="Module frontend course for 40 days"></Card>
         <Card cardTitle="Dev OPs Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Cloud Computing Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Dot Net Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Python Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Azure  Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Angular Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Analyst Course" cardDescription="Module frontend course for 40 days"></Card>
        <Card cardTitle="Data Science Course" cardDescription="Module frontend course for 40 days"></Card>
        </div>
       
        <Footer />
        
      </div>
      
    </>
  )
}

export default App

