const express = require('express');
const app = express();

// Middleware to read JSON body
app.use(express.json());

// Sample Data (In-Memory Database)
let books = [
  { id: 1, title: "1984", author: "Orwell" },
  { id: 2, title: "The Alchemist", author: "Coelho" }
];

// HOME ROUTE
app.get('/', (req, res) => {
  res.send("Book API Running...");
});


//  GET ALL BOOKS
app.get('/books', (req, res) => {
  res.json(books);
});


//POST NEW BOOK 
app.post('/books', (req, res) => {
  const body = req.body || {};

  const title = body.title;
  const author = body.author;

  if (!title || !author) {
    return res.status(400).json({
      message: "Title and Author are required"
    });
  }

  const newBook = {
    id: Date.now(), // unique id
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


//  PUT UPDATE BOOK
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body || {};

  const book = books.find(b => b.id == id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (body.title) book.title = body.title;
  if (body.author) book.author = body.author;

  res.json(book);
});


// ================== DELETE BOOK ==================
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = books.findIndex(b => b.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const removedBook = books.splice(index, 1);

  res.json({
    message: "Book deleted",
    removedBook
  });
});


const bookRouter = require("./routes/challenge5");
app.use("/challenge5", bookRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).send("Route not found");
});


// ================== START SERVER ==================
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
