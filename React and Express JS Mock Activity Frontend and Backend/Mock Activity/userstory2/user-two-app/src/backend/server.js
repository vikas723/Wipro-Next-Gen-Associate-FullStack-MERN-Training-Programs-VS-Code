const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
let products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Washing Machine", price: 40000, category: "Home Appliance" }
];
app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find(p => p.id == id);

  if (!product) return res.status(404).json({ message: "Not Found" });

  res.json(product);
});
app.listen(5000, () => console.log("Server running on 5000"));
