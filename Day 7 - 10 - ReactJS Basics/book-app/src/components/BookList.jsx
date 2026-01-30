import { useState } from "react";
import BookCard from "./BookCard";

function BookList() {
  const booksData = [
    { id: 1, title: "Atomic Habits", author: "James Clear", price: 399 },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: 299 },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", price: 599 },
    { id: 4, title: "Deep Work", author: "Cal Newport", price: 449 },
  ];

  const [viewMode, setViewMode] = useState("grid");
  const [searchText, setSearchText] = useState("");

  // Filter books based on search input
  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>📚 Featured Books</h2>

      {/* Search Input - Controlled Component */}
      <input
        type="text"
        placeholder="Search books..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* View Mode Toggle */}
      <div>
        <button onClick={() => setViewMode("grid")}>Grid View</button>
        <button onClick={() => setViewMode("list")}>List View</button>
      </div>

      {/* Book Cards */}
      <div className={`book-container ${viewMode}`}>
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;
