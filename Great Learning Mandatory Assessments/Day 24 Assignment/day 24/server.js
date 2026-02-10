const express = require("express");
const app = express();

app.use(express.json());

// Import routes
const courseRoutes = require("./routes/courses");
const userRoutes = require("./routes/users");

// Status route for deployment
app.get("/status", (req, res) => {
  res.send("App is live");
});

// Use routes
app.use("/api/courses", courseRoutes);
app.use("/api/users", userRoutes);

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log("Server running"));
}
