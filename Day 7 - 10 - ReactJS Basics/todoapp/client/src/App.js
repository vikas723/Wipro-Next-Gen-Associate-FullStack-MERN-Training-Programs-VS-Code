import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(null);

  // LOAD TODOS
  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log("Error loading"));
  }, []);

  // ADD
  const addTodo = (text) => {
    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
      .then(() => refreshTodos());
  };

  // UPDATE
  const updateTodo = (id, text) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
      .then(() => {
        setEditItem(null);
        refreshTodos();
      });
  };

  // DELETE
  const deleteTodo = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE"
    })
      .then(() => refreshTodos());
  };

  // RELOAD
  const refreshTodos = () => {
    fetch("http://localhost:5000/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  };

  return (
    <div>
      <h2>Todo Manager</h2>
      <TodoForm addTodo={addTodo} editItem={editItem} updateTodo={updateTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={setEditItem} />
    </div>
  );
}
export default App
