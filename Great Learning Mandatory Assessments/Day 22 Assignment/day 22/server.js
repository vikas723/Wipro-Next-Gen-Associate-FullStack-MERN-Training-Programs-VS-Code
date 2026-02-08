const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const rateLimit = require("express-rate-limit");

app.use(express.json());

let courses = []; // in-memory array

// Get
app.get("/api/courses", (req, res) => {
  res.json(courses);
});

// Post
app.post("/api/courses", (req, res) => {
  courses.push(req.body);
  res.json({ message: "Course added" });
});

// user story 2
app.post(
  "/api/courses",
  [
    body("name").notEmpty().withMessage("Course name is required"),
    body("duration").notEmpty().withMessage("Duration is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    courses.push(req.body);
    res.json({ message: "Course added" });
  }
);

// Put
app.put("/api/courses/:id", (req, res) => {
  courses[req.params.id] = req.body;
  res.json({ message: "Updated" });
});

// Delete
app.delete("/api/courses/:id", (req, res) => {
  courses.splice(req.params.id, 1);
  res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running"));

// user story 3
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5,
  message: { error: "Too many requests" },
});

app.use("/api/", limiter);