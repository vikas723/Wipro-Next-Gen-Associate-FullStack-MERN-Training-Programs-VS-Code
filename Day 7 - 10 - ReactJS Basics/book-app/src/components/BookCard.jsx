
function BookCard({ title, author, price, viewMode }) {
  return (
    <div className={`book-card ${viewMode}`}>
      <img
        src={`https://picsum.photos/300/200?random=${title}`}
        alt={title}
      />
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>₹{price}</p>
    </div>
  );
}

export default BookCard;
