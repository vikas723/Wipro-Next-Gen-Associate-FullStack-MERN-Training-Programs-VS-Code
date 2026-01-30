// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { Suspense, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import StatsCard from "./components/StatsCard";
import ErrorBoundary from "./components/ErrorBoundary";
import Modal from "./components/Modal";

const CourseDetails = React.lazy(() => import("./components/CourseDetails"));
const InstructorProfile = React.lazy(() => import("./components/InstructorProfile"));

function App() {
  const [showCourse, setShowCourse] = useState(false);
  const [showInstructor, setShowInstructor] = useState(false);
  const [value, setValue] = useState(100);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container mt-4">

      <h2>Lazy Loading</h2>
      <button onClick={() => setShowCourse(true)}>View Course</button>
      <button onClick={() => setShowInstructor(true)}>View Instructor</button>

      <Suspense fallback={<p>Loading...</p>}>
        {showCourse && <CourseDetails />}
        {showInstructor && <InstructorProfile />}
      </Suspense>

      <hr />

      <h2>Pure Component</h2>
      <StatsCard title="Users" value={value} lastUpdated="Now" />
      <button onClick={() => setValue(value + 1)}>Simulate Update</button>

      <hr />

      <h2>Error Boundary</h2>
      <ErrorBoundary>
        {/* Uncomment to test error */}
        {/* <BrokenComponent /> */}
        <p>No errors here!</p>
      </ErrorBoundary>

      <hr />

      <h2>Portals</h2>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal show={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
}

export default App;
