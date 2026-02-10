const express = require("express");
const router = express.Router();

let courses = [{ id: 1, name: "Node" }];

// GET all courses
router.get("/", (req, res) => {
  res.json(courses);
});

// POST new course
router.post("/", (req, res) => {
  const course = { id: Date.now(), name: req.body.name };
  courses.push(course);
  res.json(course);
});

module.exports = router;
