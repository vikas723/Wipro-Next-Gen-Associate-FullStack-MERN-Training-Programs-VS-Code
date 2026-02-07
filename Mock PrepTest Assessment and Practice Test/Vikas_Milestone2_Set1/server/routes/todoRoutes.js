const express = require("express");
const fs = require("fs");
const router = express.Router();

const path = require("path");
const FILE = path.join(__dirname, "../todos.json");


const readData = () => JSON.parse(fs.readFileSync(FILE));
const writeData = (data) =>
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));

// Get all 
router.get("/", (req, res) => {
  res.json(readData());
});

//adding
router.post("/", (req, res) => {
  const data = readData();
  let newId = 1;
  if (data.length > 0) {
    newId = data[data.length - 1].id + 1;
  }

  const newTodo = {
    id: newId,
    title: req.body.title
  };

  data.push(newTodo);
  writeData(data);
  res.json(newTodo);
});

//updating
router.put("/:id", (req, res) => {
  let data = readData();
  data = data.map(t =>
    t.id == req.params.id ? { ...t, title: req.body.title } : t
  );
  writeData(data);
  res.json({ message: "Updated" });
});

//deleting
router.delete("/:id", (req, res) => {
  let data = readData().filter(t => t.id != req.params.id);
  writeData(data);
  res.json({ message: "Deleted" });
});

module.exports = router;
