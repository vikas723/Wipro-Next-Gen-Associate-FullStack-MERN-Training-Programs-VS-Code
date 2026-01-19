// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css' 
// import Header from "./Components/Header";
// import Button from './Components/Button';
// import Footer from './Components/Footer';


// function App() {


//   const [count, setCount] = useState(0)

//   return ( //returning html code ; In a Javascript code or a function we are returning the html content
//     <>
//       <div>
         
//       <Header />

//       <h3>Hi.. This is the app content.</h3>
//       <p>React app content can be added here.</p>

//       <Card />
//       <Card />

//       <Button />
//       <Button />
//       <Button />

//       <Footer />
//     </div>
      
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import Card from "./Components/Card";
import Button from "./Components/Button";
import Footer from "./Components/Footer";

function App() {
  const [count, setCount] = useState(0); // optional for now

  return (
    <>
      <div>
        <Header /> {/* Calling Header */}
        
        <h3>Hi.. This is the app content.</h3> 
        <p>React app content can be added here.</p>

        <Card />
        

        <Button />  {/* Calling Button */}
        <Button />
        <Button />

        <Footer />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
