const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Mobile", price: 20000, category: "Electronics" },
  {id: 2, name: "Washing Machine", price: 40000, category: "Home Appliances"},
  {id: 3, name: "Sofa", price: 30000, category: "Furniture"}
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(5001, () => console.log("Backend running on 5001"));
