import React, { useEffect, useState } from "react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const loadCourses = async () => {
    try {
      const res = await fetch("http://localhost:5000/courses");
      const data = await res.json();
      setCourses(data);
    } catch {
      console.log("Error loading courses");
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const addCourse = async (title) => {
    try {
      await fetch("http://localhost:5000/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      });
      loadCourses();
    } catch {
      console.log("Error adding");
    }
  };

  const updateCourse = async (id, title) => {
    try {
      await fetch(`http://localhost:5000/courses/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      });
      setEditItem(null);
      loadCourses();
    } catch {
      console.log("Error updating");
    }
  };

  const deleteCourse = async (id) => {
    try {
      await fetch(`http://localhost:5000/courses/${id}`, {
        method: "DELETE"
      });
      loadCourses();
    } catch {
      console.log("Error deleting");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Course Tracker</h2>
      <CourseForm
        onAdd={addCourse}
        onUpdate={updateCourse}
        editItem={editItem}
      />
      <CourseList
        courses={courses}
        onDelete={deleteCourse}
        onEdit={setEditItem}
      />
    </div>
  );
}
