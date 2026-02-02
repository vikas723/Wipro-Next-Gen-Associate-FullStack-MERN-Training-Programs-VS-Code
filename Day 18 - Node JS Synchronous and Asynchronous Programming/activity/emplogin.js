const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

/*  ASYNC LOGGING  */ 
function logAsync(username) {
  const time = new Date().toLocaleString();
  const message = `ASYNC LOGIN: ${username} - ${time}\n`;

  fs.appendFile("login-log.txt", message, (err) => {
    if (err) console.log(err);
  });
}

/*  SYNC LOGGING  */
function logSync(username) {
  const time = new Date().toLocaleString();
  const message = `SYNC LOGIN: ${username} - ${time}\n`;

  fs.appendFileSync("login-log.txt", message);
}

/*  LOGIN ROUTE  */
app.post("/login", (req, res) => {
  const username = req.body.username;

  // choose one:
  logAsync(username); // Non-Blocking
  logSync(username); // Blocking

  res.send("Login Successful! Log File Created.");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});



// const http = require("http");
// const fs = require("fs");
// const querystring = require("querystring");

// // ---------- ASYNC LOG ----------
// function logAsync(username) {
//   const time = new Date().toLocaleString();
//   const message = `ASYNC LOGIN: ${username} - ${time}\n`;

//   fs.appendFile("login-log.txt", message, (err) => {
//     if (err) console.log(err);
//   });
// }

// // ---------- SYNC LOG ----------
// function logSync(username) {
//   const time = new Date().toLocaleString();
//   const message = `SYNC LOGIN: ${username} - ${time}\n`;

//   fs.appendFileSync("login-log.txt", message);
// }

// const server = http.createServer((req, res) => {

//   // Serve HTML Page
//   if (req.method === "GET" && req.url === "/") {
//     fs.readFile("index.html", (err, data) => {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }

//   // Handle Login
//   else if (req.method === "POST" && req.url === "/login") {
//     let body = "";

//     req.on("data", chunk => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       const parsed = querystring.parse(body);
//       const username = parsed.username;

//       // Choose one:
//       logAsync(username); // Recommended
//       // logSync(username); // Blocking

//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end("<h3>Login Successful. Log File Created.</h3>");
//     });
//   }

// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });



