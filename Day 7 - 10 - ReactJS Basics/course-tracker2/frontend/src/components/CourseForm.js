// import React, { useState } from "react";
// import Button from "./Button";

// function CourseForm({ onAdd }) {
//   const [title, setTitle] = useState("");

//   const handleSubmit = () => {
//     if (!title.trim()) return;
//     onAdd(title);
//     setTitle("");
//   };

//   return (
//     <div>
//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Enter course"
//       />
//       <Button text="Add" onClick={handleSubmit} />
//     </div>
//   );
// }
// export default CourseForm

import React, { useEffect, useState } from "react";
import Button from "./Button";

export default function CourseForm({ onAdd, onUpdate, editItem }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    }
  }, [editItem]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (editItem) {
      onUpdate(editItem.id, title);
    } else {
      onAdd(title);
    }

    setTitle("");
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter course"
      />
      <Button text={editItem ? "Update" : "Add"} onClick={handleSubmit} />
    </div>
  );
}
