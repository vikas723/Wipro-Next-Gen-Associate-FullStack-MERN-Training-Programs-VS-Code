import PropTypes from "prop-types";

function BookCard({ book, onSelect }) {
  return (
    <div className="card p-3 m-2" onClick={() => onSelect(book)}>
      <h5>{book.title}</h5>
      <p>{book.author.name}</p>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default BookCard;
