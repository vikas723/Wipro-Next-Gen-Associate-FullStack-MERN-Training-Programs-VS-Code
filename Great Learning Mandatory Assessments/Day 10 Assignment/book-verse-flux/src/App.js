// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddBookPage from "./pages/AddBookPage";
import BookStore from "./stores/BookStore";

const store = new BookStore(); // Dependency Injection

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home store={store} />} />
        <Route path="/add" element={<AddBookPage />} />
      </Routes>
    </Router>
  );
}

export default App;
