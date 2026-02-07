import { useState } from "react";
import Button from "./Button";

function AddCourse({ onAdd }) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <div>
      <input
        placeholder="Enter course"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button text="Add Course" onClick={handleAdd} />
    </div>
  );
}

export default AddCourse;
