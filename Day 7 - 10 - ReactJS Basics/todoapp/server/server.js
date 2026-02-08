const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let todos = [];
let nextId = 1;

app.get("/todos", (req, res) => {
    res.json(todos);
})

app.post("/todos", (req, res) => {
    const newTodo = {
        id: nextId++,
        text: req.body.text
    };
    todos.push(newTodo);
    res.json(newTodo);
});

app.put("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if(!todo)
    {
        return res.status(404).json({messgae: "Todo not found"});
    }
    
    todo.text = req.body.text;
    res.json(todo);
})
app.delete("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.json({message: "Deleted"});
});
app.listen(5000, () => {
    console.log("Server running on port 5000")
})