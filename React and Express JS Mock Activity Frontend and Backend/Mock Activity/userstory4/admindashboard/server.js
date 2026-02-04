const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.set("view engine", "ejs");

const products = [
    { id: 1, name: "Mobile", price: 20000, category: "Electronics"},
    {id: 2, name: "Washing Machine", price: 40000, category: "Home Appliances"},
    {id: 3, name: "Sofa", price: 30000, category: "Furniture"}
];
app.get("/", (req, res) =>{
    res.render("dashboard", {products});
});

// app.use((err, req, res, next) => {
//     res.status(500).send("Something went wrong");
// });
app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

// --- Error Handling Middleware ---
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    status: err.status || 500,
  });
});

app.listen(3000, ()=> console.log("Server running on http://localhost:3000"))