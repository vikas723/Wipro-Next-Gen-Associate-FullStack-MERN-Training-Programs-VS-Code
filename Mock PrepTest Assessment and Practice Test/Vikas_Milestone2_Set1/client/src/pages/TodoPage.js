
import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const API = "http://localhost:5000/todos";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const loadTodos = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.log("Load error:", err);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      <TodoForm loadTodos={loadTodos} editItem={editItem} />
      <TodoList
        todos={todos}
        loadTodos={loadTodos}
        setEditItem={setEditItem}
      />
    </div>
  );
}
