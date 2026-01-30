import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
import LoaderStatus from "../components/LoaderStatus";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 animate-fade">
      <h1 className="text-2xl font-bold mb-4">📚 BookVerse</h1>

      {/* Render Props */}
      <LoaderStatus isLoading={books.length === 0}>
        {(status) =>
          status ? (
            <p className="text-gray-400 mb-2">Loading books...</p>
          ) : (
            <p className="text-green-600 mb-2">Books Loaded</p>
          )
        }
      </LoaderStatus>

      {/* HOC */}
      <BookList isLoading={loading} books={books} />

      <hr className="my-4" />

      {books.map(book => (
        <Link
          key={book.id}
          to={`/book/${book.id}`}
          className="block text-blue-600 underline"
        >
          View details for {book.title}
        </Link>
      ))}
    </div>
  );
}

export default Home;
