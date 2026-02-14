const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();

const { sequelize } = require("./models");

const app = express();

/* ===================== MIDDLEWARE ===================== */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

/* ===================== VIEW ENGINE ===================== */
app.set("view engine", "ejs");
app.set("views", "./views");

/* ===================== SESSION ===================== */
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

/* ===================== ROUTES ===================== */
app.use("/", require("./routes/auth.routes"));
app.use("/admin", require("./routes/admin.routes"));
app.use("/instructor", require("./routes/instructor.routes"));
app.use("/students", require("./routes/student.routes"));
app.use("/reports", require("./routes/report.routes"));

/* ===================== DEFAULT ROUTE ===================== */
app.get("/", (req, res) => {
  res.redirect("/login");
});

/* ===================== DB + SERVER ===================== */
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database Synced");
    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });