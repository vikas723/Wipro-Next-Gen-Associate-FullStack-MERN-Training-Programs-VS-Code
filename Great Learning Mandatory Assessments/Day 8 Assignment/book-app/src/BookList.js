import BookCard from "./BookCard";

function BookList({ books, onSelect }) {
  return (
    <div className="row">
      {books.map((book) => (
        <div className="col-md-4" key={book.id}>
          <BookCard book={book} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}

export default BookList;
