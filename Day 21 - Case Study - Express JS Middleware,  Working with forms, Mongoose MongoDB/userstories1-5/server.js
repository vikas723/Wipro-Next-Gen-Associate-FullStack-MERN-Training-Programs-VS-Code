// import express,   {json, urlencoded} from "express";
// import morgan from "morgan";
// import requestlogger from "./middleware/requestlogger";
// import studentRouter from "./routes/studentRouter";

// const express = require("express");
// const app = express();


// //userstory 3 - built-in middleware
// app.use(express.json()); //JSON
// app.use(express.urlencoded({extended: true})); // form data

// // custom middleware
// app.use(requestLogger);

// //user story 4
// app.use(morgan("dev"));

// // Calling studentRouter
// app.use("students", studentRouter);

// // user story 5 - errorhandling middleware
// app.use((err, req, res, next)=>{
//     console.err("Error", err.messgae);

//     res.status(500).json({sucess: false, message: "Internal Serer Error"});
// })

// // 404 error handling middleware
// app.use((req, res)=>{
//     res.status(404).json({sucess: false, message: "Route Not found"});
// })

// //listen to port
// app.listen(3000, () =>{
//     console.log("Server is running and started")
// })


// import express, { json, urlencoded } from "express";
// import morgan from "morgan";
// import requestLogger from "./middleware/requestLogger";
// import studentRoutes from "./routes/studentRoutes";

// const app = express();
// // Built -in middleware
// app.use(json());  // JSON 
// app.use(urlencoded({ extended: true })); // Form data

// const express = require("express");
// const morgan = require("morgan");
// const requestLogger = require("./middleware/requestLogger");
// const studentRoutes = require("./routes/studentRoutes");
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //custom middleware
// app.use(requestLogger);

// //Third - party middlewares
// app.use(morgan("dev"));

// // routes
// app.use("/students", studentRoutes);

// // 404 Middleware
// app.use((req,res)=> {
//     res.status(404).json({success :false , message : "Route not found"});
// });
// //Global Error Handler middleware must be at the end
// app.use((err,req,res,next)=> {
//     console.error("Error" ,err.message);
//     res.status(500).json({success :false , message : "Some internal server error"});
// });

// app.listen(3000, ()=>{
//     console.log("Server is running and started");
// })



const express = require("express");
const morgan = require("morgan");
const requestLogger = require("./middleware/requestLogger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware
app.use(requestLogger);

// Third-party middleware
app.use(morgan("dev"));

// Routes
app.use("/students", studentRoutes);

// 404 Middleware
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global Error Handler (must be last)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    success: false,
    message: "Some internal server error"
  });
});

app.listen(3000, () => {
  console.log("Server is running and started on port 3000");
});
