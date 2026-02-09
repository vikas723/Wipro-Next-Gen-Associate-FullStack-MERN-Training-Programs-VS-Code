import Button from "./Button";

function CourseList({ courses, onDelete, onEdit }) {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.title}
          <Button text = "Edit" onClick={() => onEdit(course)}/>
          <Button text="Delete" onClick={() => onDelete(course.id)} />
          
        </li>
      ))}
    </ul>
  );
}
export default CourseList