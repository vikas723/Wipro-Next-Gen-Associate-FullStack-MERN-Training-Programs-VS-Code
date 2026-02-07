

import React, { useState, useEffect } from "react";
import Button from "./Button";

const API = "http://localhost:5000/todos";

export default function TodoForm({ loadTodos, editItem }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editItem) setTitle(editItem.title);
  }, [editItem]);

  const handleSubmit = async () => {
    try {
      if (!title) return;

      if (editItem) {
        await fetch(`${API}/${editItem.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title })
        });
      } else {
        await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title })
        });
      }

      setTitle("");
      loadTodos();
    } catch (err) {
      alert("Operation failed");
    }
  };

  return (
    <div>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <Button text="Save" onClick={handleSubmit} />
    </div>
  );
}


