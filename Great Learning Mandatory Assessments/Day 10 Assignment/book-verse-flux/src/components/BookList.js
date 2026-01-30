
import React, { useEffect, useState } from "react";

const BookList = ({ store }) => {
  const [books, setBooks] = useState(store.getBooks());

  useEffect(() => {
    const updateBooks = () => {
      setBooks([...store.getBooks()]);
    };

    store.addListener(updateBooks);
  }, [store]);

  return (
    <div>
      <h2>Books</h2>
      {books.length === 0 ? (
        <p>No books added yet</p>
      ) : (
        books.map((book, i) => (
          <div key={i}>
            <p>
              {book.title} - {book.author} - ₹{book.price}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
