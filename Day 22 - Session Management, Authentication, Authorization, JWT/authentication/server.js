
// var express = require("express");
// var cookieParser = require("cookie-parser");
// var session = require("express-session");
// const mongoose = require("mongoose");
// const User = require("./models/User.js");
// // var app = express();
// const app = express();

// app.set("view engine" ,"ejs");

// mongoose.connect("mongodb://127.0.0.1:27017/authdb") // connecting to my firstconnection database in the mongodb under the admin collection
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

// // Body Parsers - Built-in-middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Static Folder
// app.use(express.static("views")); 
// app.use(session({

//     secret: 'sample-secretkey',
//     resave: false,
//     saveUninitialized:false
// }));

// app.get("/demouser", async(req, res) => {
//     await User.Create({username: "demouser", password: "1234"});
//     res.send("user created");
// })
// app.get("/login", (req, res) => res.render("login"));

// app.post("/login", async(req, res) =>{
//     const user = await User.findOne(req.body);
//     if(!user) return res.send("invalid credentials");
//     res.session.user = user;
//     res.redirect("/dashboard");
// })

// app.get("/dashboard", (req, res) => {
//     if(!req.session.user) return res.girect("/login");
//     res.render("dashboard", {user: req.session.user});
// })

// app.get("/logout", (req, res)=> {
//     req.session.destroy();
//     res.redirect("/login");
// })
// app.listen(3000);
// console.log("server started");


var express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const mongoose = require("mongoose");
const User = require("./models/User.js");

const app = express();

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/authdb")
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Folder
app.use(express.static("views"));

app.use(session({
  secret: 'sample-secretkey',
  resave: false,
  saveUninitialized: false
}));

// Create Demo User
app.get("/demouser", async (req, res) => {
  await User.create({ username: "demouser", password: "1234" });
  res.send("user created");
});

// Login Page
app.get("/login", (req, res) => res.render("login"));

// Login Logic
app.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.send("invalid credentials");

  req.session.user = user;
  res.redirect("/dashboard");
});

// Dashboard
app.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.render("dashboard", { user: req.session.user });
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
