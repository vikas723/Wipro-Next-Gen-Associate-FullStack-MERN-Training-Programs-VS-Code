const express = require("express");
const app = express();

// Custom Logging Middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url} at ${new Date().toISOString()}`);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.post("/users", (req, res) => {
  res.json({
    message: "User created successfully",
    data: req.body
  });
});

app.set("view engine", "ejs");
const courses = [
  { id: 1, name: "React" },
  { id: 2, name: "Node" },
  { id: 3, name: "MongoDB" }
];

app.get("/courses", (req, res) => {
  res.render("courses", { courses });
});

app.get("/", (req, res) => {
  res.send("Server Working");
});

// ---------------- START SERVER ----------------
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});