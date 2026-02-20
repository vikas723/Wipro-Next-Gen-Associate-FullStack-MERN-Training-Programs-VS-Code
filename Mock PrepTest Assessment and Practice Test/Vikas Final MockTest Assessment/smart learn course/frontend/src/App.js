import React from "react";
import CourseList from "./components/CourseList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <CourseList />
      <ToastContainer />
    </div>
  );
}

export default App;