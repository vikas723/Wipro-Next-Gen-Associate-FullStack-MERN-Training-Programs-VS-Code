const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student.js");

const app = express();

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/admin") // connecting to my firstconnection database in the mongodb under the admin collection
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Folder
app.use(express.static("publichtml")); //Serve HTML files from the publichtml folder

// Route
app.post("/students", async (req, res) => {
  try {
    const { name, email } = req.body;   // MUST be inside route

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email required"
      });
    }

    await Student.create({ name, email }); // Student is a model created

    res.json({
      success: true,
      message: "Student data is saved successfully"
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
