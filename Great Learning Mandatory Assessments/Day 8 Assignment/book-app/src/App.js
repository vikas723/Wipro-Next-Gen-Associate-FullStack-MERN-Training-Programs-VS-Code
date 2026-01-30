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
import { useState } from "react";
import BookList from "./BookList";
import AuthorInfo from "./AuthorInfo";
import SearchBox from "./SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const books = [
    {
      id: 1,
      title: "React Basics",
      author: {
        name: "Dan Abramov",
        bio: "Core React Developer",
        topBooks: ["Redux", "React Hooks", "JS Patterns"],
      },
    },
    {
      id: 2,
      title: "JavaScript Deep Dive",
      author: {
        name: "Kyle Simpson",
        bio: "JS Expert",
        topBooks: ["You Don't Know JS", "Async JS", "Scope & Closures"],
      },
    },
  ];

  return (
    <div className="container mt-4">
      <h2>📚 BookVerse</h2>

      <SearchBox />

      <BookList books={books} onSelect={(book) => setSelectedAuthor(book.author)} />

      <AuthorInfo author={selectedAuthor} />
    </div>
  );
}

export default App;
