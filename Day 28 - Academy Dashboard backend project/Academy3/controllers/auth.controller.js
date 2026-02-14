// require("dotenv").config();

// exports.showLogin = (req, res) => {
//   res.render("login");
// };

// exports.login = (req, res) => {
//   const { username, password } = req.body;

//   if (
//     username === process.env.ADMIN_USER &&
//     password === process.env.ADMIN_PASS
//   ) {
//     req.session.user = { role: "admin" };
//     return res.redirect("/admin/dashboard");
//   }

//   res.send("Invalid Login");
// };

// exports.logout = (req, res) => {
//   req.session.destroy(() => res.redirect("/login"));
// };
const { Instructor } = require("../models");
const bcrypt = require("bcrypt");
require("dotenv").config();

exports.showLogin = (req, res) => {
  res.render("login");
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  // ADMIN LOGIN
  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    req.session.user = { role: "admin" };
    return res.redirect("/admin/dashboard");
  }

  // INSTRUCTOR LOGIN
  const instructor = await Instructor.findOne({ where: { username } });

  if (instructor && await bcrypt.compare(password, instructor.password)) {
    req.session.user = {
      id: instructor.id,
      role: "instructor"
    };
    return res.redirect("/instructor/dashboard");
  }

  res.send("Invalid Login");
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
};