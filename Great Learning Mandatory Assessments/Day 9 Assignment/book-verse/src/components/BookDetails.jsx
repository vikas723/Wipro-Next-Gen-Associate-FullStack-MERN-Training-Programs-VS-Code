import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) {
    return <p className="p-6">Loading book...</p>;
  }

  return (
    <div className="p-6 animate-fade">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="italic">{book.author}</p>
      <p className="mt-2">{book.description}</p>

      <Link
        to="/home"
        className="text-blue-600 underline mt-4 block"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default BookDetails;
