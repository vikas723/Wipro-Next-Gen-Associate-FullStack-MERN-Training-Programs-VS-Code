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


import BookList from "./components/BookList";
import "./App.css";
function App(){
  return(
    <div className = "App">
      <h1> BookVerse </h1>
      <p> Welcome to BookVerse! Explore our Popular Books</p>
      <BookList/>
    </div>
  );
}
export default App;