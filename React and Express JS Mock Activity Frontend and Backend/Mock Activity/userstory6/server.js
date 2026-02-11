// require("dotenv").config();
// const express = require("express");
// const cookieParser = require("cookie-parser");
// const connectDB = require("./config/db");

// const app = express();
// connectDB();
// app.use(express.json()); // IMPORTANT
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use("/", require("./routes/authRoutes"));
// app.use("/", require("./routes/productRoutes"));

// app.listen(3000, () => console.log("Server running on 3000"));

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");


const JWT_SECRET = "inventorysecret123";

mongoose.connect("mongodb://127.0.0.1:27017/inventoryjwt")
  .then(()=> console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/productRoutes"));

app.listen(3000, ()=> console.log("Server running on 3000"));

// module.exports.JWT_SECRET = JWT_SECRET;
