
import { useEffect, useState } from "react";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";

function App() {
  const [courses, setCourses] = useState([]); //useState to store the courses
  const API = "http://localhost:5000/courses";

  const loadCourses = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setCourses(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => { //useEffect runs only once when the component loads 
    loadCourses();
  }, []);

  const addCourse = async (title) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  title })
    });
    loadCourses();
  };

  const deleteCourse = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadCourses();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Online Course Tracker</h1>
      <AddCourse onAdd={addCourse} />
      <CourseList courses={courses} onDelete={deleteCourse} />
    </div>
  );
}

export default App;
