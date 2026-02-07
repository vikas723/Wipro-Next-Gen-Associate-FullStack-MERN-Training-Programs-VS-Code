const express = require("express");
const router = express.Router();

let courses = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Node Fundamentals" }
];

router.get("/", (req, res) => {
  res.json(courses);
});

let nextTd = 3 
router.post("/", (req, res) => {
  const newCourse = {
    id:   nextTd++,
    title : req.body.title
  }
  courses.push(newCourse);
  res.json({ message: "Course Added" });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  courses = courses.filter(c => c.id !== id);
  res.json({ message: "Course Deleted" });
});

module.exports = router;
