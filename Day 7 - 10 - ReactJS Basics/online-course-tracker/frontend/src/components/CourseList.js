import Button from "./Button";

function CourseList({ courses, onDelete }) {
  return (
    <div>
      <h3>Courses List</h3>
      {courses.map((c) => (
        <div key={c.id} style={{ marginBottom: "10px" }}>
          <p>{c.title}</p>
          <Button text="Delete" onClick={() => onDelete(c.id)} />
        </div>
      ))}
    </div>
  );
}

export default CourseList;
