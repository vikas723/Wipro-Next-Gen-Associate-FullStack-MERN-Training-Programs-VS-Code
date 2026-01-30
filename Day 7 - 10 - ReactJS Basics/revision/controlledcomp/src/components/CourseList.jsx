import { useEffect, useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/courses")
      .then((res) => res.json())   // FIXED
      .then((data) => setCourses(data))
      .catch(() => console.log("Backend is not working"));
  }, []);

  return (
    <div>
      <h2>Course List from Backend</h2>
      {courses.map((course) => (
        <p key={course.id}>
          {course.name} - {course.duration}
        </p>
      ))}
    </div>
  );
}

export default CourseList;
