
import Button from "./Button";

const API = "http://localhost:5000/todos";

export default function TodoList({ todos = [], loadTodos, setEditItem }) {

  const handleDelete = async (id) => {
    try {
      await fetch(`${API}/${id}`, { method: "DELETE" });
      loadTodos();
    } catch {
      alert("Delete failed");
    }
  };

  return (
    <ul>
      {todos.map(t => (
        <li key={t.id}>
          {t.title}
          <Button text="Edit" onClick={() => setEditItem(t)} />
          <Button text="Delete" onClick={() => handleDelete(t.id)} />
        </li>
      ))}
    </ul>
  );
}
