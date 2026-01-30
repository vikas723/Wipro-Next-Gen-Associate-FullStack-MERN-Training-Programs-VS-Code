import withLoader from "./withLoader";

function BookList({ books }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map(book => (
        <div
          key={book.id}
          className="p-4 border rounded shadow bg-white"
        >
          <h3 className="font-bold">{book.title}</h3>
          <p className="text-sm">{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default withLoader(BookList);
