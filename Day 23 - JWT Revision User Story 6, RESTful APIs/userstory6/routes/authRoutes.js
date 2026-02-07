// const router = require("express").Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// router.get("/login", (req, res) => res.render("login"));

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });

//   if (!user) return res.send("User not found");

//   const valid = await bcrypt.compare(password, user.password);
//   if (!valid) return res.send("Wrong Password");

//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET
//   );

//   res.cookie("token", token);
//   res.redirect("/dashboard");
// });

// router.get("/logout", (req, res) => {
//   res.clearCookie("token");
//   res.redirect("/login");
// });

// module.exports = router;


const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { JWT_SECRET } = require("../config");

// Register page
router.get("/register", (req, res) => {
  res.render("register");
});

// Register POST
router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  await User.create({
    username: req.body.username,
    password: hash,
    role: req.body.role || "user"
  });
  res.send("User Created. Login via Thunder Client.");
});

// Login JSON (Thunder Client)
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.send("User not found");

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.send("Wrong Password");

  
  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET
  );

  // If browser login → cookie + redirect
  if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
    res.cookie("token", token);
    return res.redirect("/dashboard");
  }

  // If Thunder login → JSON
  return res.json({ message: "Login successful", token });

  // const token = jwt.sign(
  //   { id: user._id, role: user.role },
  //   JWT_SECRET
  // );

//   const token = jwt.sign(
//   { id: user._id, role: user.role },
//   JWT_SECRET
// );

// // store token in cookie
// res.cookie("token", token);

// // redirect to dashboard
// res.redirect("/dashboard");


//   res.json({ message: "Login successful", token });
});

module.exports = router;
