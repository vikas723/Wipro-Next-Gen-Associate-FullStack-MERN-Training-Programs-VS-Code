// const express = require("express");
// const app = express();
// function requestLogger(req, res, next) {
//   const time = new Date().toISOString();
//   const method = req.method;
//   const url = req.url;

//   console.log(`${time} - ${method} - ${url}`);

//   next(); 
// }
// app.use(requestLogger);

// app.use(requestLogger);
// app.get("/", (req,res)=>{
//     res.send("Home Page");
// })
// app.get("/users", (req, res)=>{
//     res.send("Users Page");
// })
// app.listen(3000, ()=>{
//     console.log("Server running on port 3000");
// })

function requestLogger(req, res, next) {
  const time = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`${time} - ${method} - ${url}`);

  next();
}

module.exports = requestLogger;


