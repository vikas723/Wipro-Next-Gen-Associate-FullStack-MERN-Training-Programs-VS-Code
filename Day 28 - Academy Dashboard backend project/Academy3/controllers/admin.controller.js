// const { Instructor, Course } = require("../models");
// const bcrypt = require("bcrypt");
// exports.dashboard = (req, res) => {
//   res.render("adminDashboard");
// };

// exports.showInstructorForm = (req, res) => {
//   res.render("createInstructor");
// };

// exports.createInstructor = async (req, res) => {
//   await Instructor.create(req.body);
//   res.redirect("/admin/dashboard");
// };

// exports.showCourseForm = async (req, res) => {
//   const instructors = await Instructor.findAll();
//   res.render("createCourse", { instructors });
// };

// exports.createCourse = async (req, res) => {
//   await Course.create(req.body);
//   res.redirect("/admin/dashboard");
// };
const { Instructor, Course } = require("../models");
const bcrypt = require("bcrypt");

exports.dashboard = (req, res) => {
  res.render("adminDashboard");
};

exports.showInstructorForm = (req, res) => {
  res.render("createInstructor");
};

/* REPLACE THIS FUNCTION */
exports.createInstructor = async (req, res) => {
  try {
    console.log(req.body); // DEBUG

    const hash = await bcrypt.hash(req.body.password, 10);

    await Instructor.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hash
    });

    res.redirect("/admin/dashboard");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

exports.showCourseForm = async (req, res) => {
  const instructors = await Instructor.findAll();
  res.render("createCourse", { instructors });
};

exports.createCourse = async (req, res) => {
  await Course.create(req.body);
  res.redirect("/admin/dashboard");
};