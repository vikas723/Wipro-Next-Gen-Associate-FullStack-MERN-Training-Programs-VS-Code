import React, { useState, useEffect } from "react";

function TodoForm({ addTodo, editItem, updateTodo }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editItem) {
      setText(editItem.text);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    if (editItem) {
      updateTodo(editItem.id, text);
    } else {
      addTodo(text);
    }

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Save</button>
    </form>
  );
}
export default TodoForm