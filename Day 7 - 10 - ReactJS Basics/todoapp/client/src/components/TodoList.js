import Button from "./Button";

function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <Button label="Edit" onClick={() => onEdit(todo)} />
          <Button label="Delete" onClick={() => onDelete(todo.id)} />
        </li>
      ))}
    </ul>
  );
}
export default TodoList
