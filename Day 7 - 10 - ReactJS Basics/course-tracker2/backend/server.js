// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// let courses = [];
// let id = 1;

// // GET all courses
// app.get("/courses", (req, res) => {
//   res.json(courses);
// });

// // POST add course
// app.post("/courses", (req, res) => {
//   const { title } = req.body;

//   if (!title) {
//     return res.status(400).json({ message: "Title required" });
//   }

//   const newCourse = { id: id++, title };
//   courses.push(newCourse);
//   res.json(newCourse);
// });

// // UPDATE COURSE

// app.put("/courses/:id", (req, res) => {
//   const courseId = parseInt(req.params.id);
//   const { title } = req.body;

//   const course = courses.find(c => c.id === courseId);
//   if (!course) {
//     return res.status(404).json({ message: "Course not found" });
//   }

//   course.title = title;
//   res.json(course);
// });



// // DELETE course
// app.delete("/courses/:id", (req, res) => {
//   const courseId = parseInt(req.params.id);
//   courses = courses.filter(c => c.id !== courseId);
//   res.json({ message: "Deleted" });
// });

// // Error Handling Middleware
// app.use((err, req, res, next) => {
//   res.status(500).json({ message: "Server Error" });
// });

// app.listen(5000, () => console.log("Server running on 5000"));


const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let courses = [];
let id = 1;

// GET all courses
app.get("/courses", (req, res) => {
  res.json(courses);
});

// POST add course
app.post("/courses", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title required" });
  }

  const newCourse = { id: id++, title };
  courses.push(newCourse);
  res.json(newCourse);
});

// UPDATE COURSE
app.put("/courses/:id", (req, res) => {
  const courseId = Number(req.params.id);   // changed here
  const { title } = req.body;

  const course = courses.find(c => c.id === courseId);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  course.title = title;
  res.json(course);
});

// DELETE course (already using filter correctly)
app.delete("/courses/:id", (req, res) => {
  const courseId = Number(req.params.id);   // changed here

  courses = courses.filter(c => c.id !== courseId);

  res.json({ message: "Deleted" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Server Error" });
});

app.listen(5000, () => console.log("Server running on 5000"));
