
// var express = require("express");
// var cookieParser = require("cookie-parser");
// var session = require("express-session");
// const mongoose = require("mongoose");
// const User = require("./models/User.js");

// const app = express();

// app.set("view engine", "ejs");

// mongoose.connect("mongodb://localhost:27017/authdb")
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

// // Body Parsers
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Static Folder
// app.use(express.static("views"));

// app.use(session({
//   secret: 'sample-secretkey',
//   resave: false,
//   saveUninitialized: false
// }));

// // Create Demo User
// app.get("/demouser", async (req, res) => {
//   await User.create({ username: "adminuser", password: "1234", role: "admin" });
//   await User.create({ username: "clientuser", password: "1234", role :"user" });
//   res.send("user created");
// });

// function isAuthenticated(req, res, next)
// {
//     if(!req.session.user)
//     {
//         return res.redirect("login");
 
//     }
//     next();
// }

// function authorize(role)
// {
//     return(req, res, next)=>{
//         if(req.session.user.role != role){
//             return res.send("Access denied");
//         }
//         next();
//     }
// }

// // Login Page
// app.get("/login", (req, res) => res.render("login"));

// // Login Logic
// app.post("/login", async (req, res) => {
//   const user = await User.findOne(req.body);
//   if (!user) return res.send("invalid credentials");
//   req.session.user = user;
//   res.redirect("/user");
// });

// // Dashboard
// app.get("/dashboard", (req, res) => {
// //   if (!req.session.user) return res.redirect("/login");
//   res.render("user", { user: req.session.user });
// });


// app.get("/user", isAuthenticated,(req, res)=>{
//     res.render("user", {user: req.session.user});
// })

// app.get("/admin", isAuthenticated, authorize("admin"),(req, res)=>{
//     res.render("admin");
// })

// // Logout
// app.get("/logout", (req, res) => {
//   req.session.destroy();
//   res.redirect("/login");
// });

// app.listen(3000, () => {
//   console.log("server started on port 3000");
// });





//2
// var express = require("express");
// var cookieParser = require("cookie-parser");
// var session = require("express-session");
// var mongoose = require("mongoose");
// var User = require("./models/User.js");

// var app = express();

// app.set("view engine", "ejs");

// // ---------------- DB CONNECTION ----------------
// mongoose.connect("mongodb://localhost:27017/rbac")
//   .then(() => console.log("DB connected"))
//   .catch(err => console.error(err));

// // ---------------- BUILT-IN MIDDLEWARE ----------------
// app.use(express.json());                 // JSON body
// app.use(express.urlencoded({ extended: true })); // Form body

// // Do NOT make views static (remove if present)
// // app.use(express.static("views"));

// app.use(cookieParser());

// app.use(session({
//   secret: "sample-secretkey",
//   resave: false,
//   saveUninitialized: false
// }));

// // ---------------- DEMO USERS ----------------
// // Visit once: http://localhost:3000/demouser
// app.get("/demouser", async (req, res) => {
//   await User.deleteMany({}); // optional reset

//   await User.create({
//     username: "adminuser",
//     password: "1234",
//     role: "admin"
//   });

//   await User.create({
//     username: "clientuser",
//     password: "1234",
//     role: "user"
//   });

//   res.send("Users created");
// });

// // ---------------- MIDDLEWARE FUNCTIONS ----------------
// function isAuthenticated(req, res, next) {
//   if (!req.session.user) {
//     return res.redirect("/login");
//   }
//   next();
// }

// function authorize(role) {
//   return function (req, res, next) {
//     if (req.session.user.role !== role) {
//       return res.send("Access denied");
//     }
//     next();
//   };
// }

// // ---------------- ROUTES ----------------

// // Login Page
// app.get("/login", function (req, res) {
//   res.render("login");
// });

// // Login Logic
// app.post("/login", async function (req, res) {
//   var username = req.body.username;
//   var password = req.body.password;

//   var user = await User.findOne({ username: username, password: password });

//   if (!user) {
//     return res.send("invalid credentials");
//   }

//   req.session.user = user;

//   if (user.role === "admin") {
//     return res.redirect("/admin");
//   } else {
//     return res.redirect("/user");
//   }
// });

// // User Page
// app.get("/user", isAuthenticated, function (req, res) {
//   res.render("user", { user: req.session.user });
// });

// // Admin Page
// app.get("/admin", isAuthenticated, authorize("admin"), function (req, res) {
//   res.render("admin", { user: req.session.user });
// });

// // Logout
// app.get("/logout", function (req, res) {
//   req.session.destroy(function () {
//     res.redirect("/login");
//   });
// });

// // ---------------- SERVER ----------------
// app.listen(3000, function () {
//   console.log("Server started on port 3000");
// });



//3
// var express = require("express");
// var cookieParser = require("cookie-parser");
// var session = require("express-session");
// var mongoose = require("mongoose");
// var User = require("./models/User.js");

// var app = express();

// // ---------------- VIEW ENGINE ----------------
// app.set("view engine", "ejs");

// // ---------------- DB CONNECTION ----------------
// mongoose.connect("mongodb://127.0.0.1:27017/rbac")
//   .then(() => console.log("DB connected"))
//   .catch(err => console.log("DB ERROR:", err));

// // ---------------- MIDDLEWARE ----------------
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static("views"));

// app.use(session({
//   secret: "sample-secretkey",
//   resave: false,
//   saveUninitialized: false
// }));

// // ---------------- DEMO USERS ----------------
// // Open once: http://localhost:3000/demouser
// app.get("/demouser", async function (req, res) {
//   try {
//     await User.deleteMany({});

//     var admin = await User.create({
//       username: "adminuser",
//       password: "1234",
//       role: "admin"
//     });

//     var client = await User.create({
//       username: "clientuser",
//       password: "1234",
//       role: "user"
//     });

//     console.log("Inserted:", admin.username, client.username);
//     res.send("Demo users created successfully");
//   } catch (err) {
//     console.log("Create User Error:", err);
//     res.send("Error creating users");
//   }
// });

// // ---------------- AUTH MIDDLEWARE ----------------
// function isAuthenticated(req, res, next) {
//   if (!req.session.user) {
//     return res.redirect("/login");
//   }
//   next();
// }

// function authorize(role) {
//   return function (req, res, next) {
//     if (req.session.user.role !== role) {
//       return res.send("Access Denied");
//     }
//     next();
//   };
// }

// // ---------------- ROUTES ----------------

// // Login Page
// app.get("/login", function (req, res) {
//   res.render("login");
// });

// // Login Logic
// app.post("/login", async function (req, res) {
//   try {
//     console.log("Login Body:", req.body);

//     var user = await User.findOne({
//       username: req.body.username,
//       password: req.body.password
//     });

//     console.log("Found User:", user);

//     if (!user) {
//       return res.send("invalid credentials");
//     }

//     req.session.user = user;

//     if (user.role === "admin") {
//       return res.redirect("/admin");
//     } else {
//       return res.redirect("/user");
//     }

//   } catch (err) {
//     console.log("Login Error:", err);
//     res.send("Login error");
//   }
// });

// // User Page
// app.get("/user", isAuthenticated, function (req, res) {
//   res.render("user", { user: req.session.user });
// });

// // Admin Page
// app.get("/admin", isAuthenticated, authorize("admin"), function (req, res) {
//   res.render("admin", { user: req.session.user });
// });

// // Logout
// app.get("/logout", function (req, res) {
//   req.session.destroy(function () {
//     res.redirect("/login");
//   });
// });

// // ---------------- SERVER ----------------
// app.listen(3000, function () {
//   console.log("Server running at http://localhost:3000");
// });









var express = require("express");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var User = require("./models/User.js");

var app = express();

app.set("view engine", "ejs");

// ---------------- DB CONNECTION ----------------
mongoose.connect("mongodb://localhost:27017/authdb")
  .then(() => console.log("DB connected"))
  .catch(err => console.log("DB ERROR:", err));

// ---------------- BUILT-IN MIDDLEWARE ----------------
app.use(express.json()); // JSON body
app.use(express.urlencoded({ extended: true })); // form body
app.use(cookieParser());

// DO NOT use views as static
// app.use(express.static("views"));

app.use(session({
  secret: "sample-secretkey",
  resave: false,
  saveUninitialized: false
}));

// ---------------- DEMO USERS ----------------
app.get("/demouser", async function (req, res) {
  try {
    await User.deleteMany({}); // clear old data

    var admin = await User.create({
      username: "adminuser",
      password: "1234",
      role: "admin"
    });

    var client = await User.create({
      username: "clientuser",
      password: "1234",
      role: "user"
    });

    console.log("Inserted:", admin.username, client.username);
    res.send("Users created successfully");
  } catch (err) {
    console.log("Insert Error:", err);
    res.send("Error creating users");
  }
});

// ---------------- AUTH MIDDLEWARE ----------------
function isAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  next();
}

function authorize(role) {
  return function (req, res, next) {
    if (req.session.user.role !== role) {
      return res.send("Access denied");
    }
    next();
  };
}

// ---------------- ROUTES ----------------

// Login Page
app.get("/login", function (req, res) {
  res.render("login");
});

// Login Logic
app.post("/login", async function (req, res) {
  try {
    console.log("Login Body:", req.body);

    var user = await User.findOne({
      username: req.body.username,
      password: req.body.password
    });

    console.log("Found User:", user);

    if (!user) return res.send("invalid credentials");

    req.session.user = user;

    if (user.role === "admin") {
      return res.redirect("/admin");
    } else {
      return res.redirect("/user");
    }
  } catch (err) {
    console.log("Login Error:", err);
    res.send("Login error");
  }
});

// User Page
app.get("/user", isAuthenticated, function (req, res) {
  res.render("user", { user: req.session.user });
});

// Admin Page
app.get("/admin", isAuthenticated, authorize("admin"), function (req, res) {
  res.render("admin", { user: req.session.user });
});

// Logout
app.get("/logout", function (req, res) {
  req.session.destroy(function () {
    res.redirect("/login");
  });
});

// ---------------- SERVER ----------------
app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
