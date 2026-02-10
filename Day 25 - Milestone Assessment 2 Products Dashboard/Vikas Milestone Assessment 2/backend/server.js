const express= require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let products = [];
let nextId = 1;  

app.get("/products", (req, res) => res.json(products));

app.get("/products/:id", (req, res) => {
  const p = products.find(x => x.id == req.params.id);
  res.json(p);
});

app.post("/products", (req, res) => {
  const obj = { id: nextId++,  ...req.body };
  products.push(obj);
  res.json(obj);
});

app.listen(5000, () => console.log("running"));