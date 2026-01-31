// ================================
// 1) FILE SYSTEM — READ & WRITE
// ================================
const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");
const EventEmitter = require("events");

console.log("\n=== FILE SYSTEM DEMO ===");

fs.writeFileSync("sample.txt", "Hello from Node.js!\n");
fs.appendFileSync("sample.txt", "Appending a new line.\n");

const fileData = fs.readFileSync("sample.txt", "utf-8");
console.log("File Content:\n", fileData);


// ================================
// 2) OS MODULE — SYSTEM INFO
// ================================
console.log("\n=== OS MODULE DEMO ===");

console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());


// ================================
// 3) PATH MODULE — FILE PATHS
// ================================
console.log("\n=== PATH MODULE DEMO ===");

console.log("File Extension:", path.extname(__filename));
console.log("Base Name:", path.basename(__filename));
console.log("Directory Name:", path.dirname(__filename));

const joinedPath = path.join(__dirname, "files", "test.txt");
console.log("Joined Path:", joinedPath);


// ================================
// 4) EVENTS MODULE
// ================================
console.log("\n=== EVENTS MODULE DEMO ===");

const event = new EventEmitter();

event.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

event.emit("greet", process.argv[2] || "Guest");


// ================================
// 5) ASYNC PROGRAMMING
// ================================
console.log("\n=== ASYNC DEMO ===");

const wait = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function asyncDemo() {
  console.log("Start async operation...");
  await wait(2000);
  console.log("2 seconds later...");
}

asyncDemo();


// ================================
// 6) JSON HANDLING
// ================================
console.log("\n=== JSON DEMO ===");

const user = {
  name: process.argv[2] || "Vikas",
  role: "Developer"
};

fs.writeFileSync("user.json", JSON.stringify(user, null, 2));

const jsonData = JSON.parse(fs.readFileSync("user.json"));
console.log("JSON Data:", jsonData);


// ================================
// 7) SIMPLE CALCULATOR CLI
// ================================
console.log("\n=== CALCULATOR DEMO ===");

const num1 = parseFloat(process.argv[3]);
const operator = process.argv[4];
const num2 = parseFloat(process.argv[5]);

if (!isNaN(num1) && !isNaN(num2)) {
  switch (operator) {
    case "+":
      console.log("Result:", num1 + num2);
      break;
    case "-":
      console.log("Result:", num1 - num2);
      break;
    case "*":
      console.log("Result:", num1 * num2);
      break;
    case "/":
      console.log("Result:", num1 / num2);
      break;
    default:
      console.log("Invalid operator");
  }
} else {
  console.log("Calculator skipped (missing inputs)");
}


// ================================
// 8) SIMPLE HTTP SERVER
// ================================
console.log("\n=== HTTP SERVER DEMO ===");

const server = http.createServer((req, res) => {// ================================
// 1) FILE SYSTEM — READ & WRITE
// ================================
const fs = require("fs");
const os = require("os");
const path = require("path");
const http = require("http");
const EventEmitter = require("events");

console.log("\n=== FILE SYSTEM DEMO ===");

fs.writeFileSync("sample.txt", "Hello from Node.js!\n");
fs.appendFileSync("sample.txt", "Appending a new line.\n");

const fileData = fs.readFileSync("sample.txt", "utf-8");
console.log("File Content:\n", fileData);


// ================================
// 2) OS MODULE — SYSTEM INFO
// ================================
console.log("\n=== OS MODULE DEMO ===");

console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());


// ================================
// 3) PATH MODULE — FILE PATHS
// ================================
console.log("\n=== PATH MODULE DEMO ===");

console.log("File Extension:", path.extname(__filename));
console.log("Base Name:", path.basename(__filename));
console.log("Directory Name:", path.dirname(__filename));

const joinedPath = path.join(__dirname, "files", "test.txt");
console.log("Joined Path:", joinedPath);


// ================================
// 4) EVENTS MODULE
// ================================
console.log("\n=== EVENTS MODULE DEMO ===");

const event = new EventEmitter();

event.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

event.emit("greet", process.argv[2] || "Guest");


// ================================
// 5) ASYNC PROGRAMMING
// ================================
console.log("\n=== ASYNC DEMO ===");

const wait = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function asyncDemo() {
  console.log("Start async operation...");
  await wait(2000);
  console.log("2 seconds later...");
}

asyncDemo();


// ================================
// 6) JSON HANDLING
// ================================
console.log("\n=== JSON DEMO ===");

const user = {
  name: process.argv[2] || "Vikas",
  role: "Developer"
};

fs.writeFileSync("user.json", JSON.stringify(user, null, 2));

const jsonData = JSON.parse(fs.readFileSync("user.json"));
console.log("JSON Data:", jsonData);


// ================================
// 7) SIMPLE CALCULATOR CLI
// ================================
console.log("\n=== CALCULATOR DEMO ===");

const num1 = parseFloat(process.argv[3]);
const operator = process.argv[4];
const num2 = parseFloat(process.argv[5]);

if (!isNaN(num1) && !isNaN(num2)) {
  switch (operator) {
    case "+":
      console.log("Result:", num1 + num2);
      break;
    case "-":
      console.log("Result:", num1 - num2);
      break;
    case "*":
      console.log("Result:", num1 * num2);
      break;
    case "/":
      console.log("Result:", num1 / num2);
      break;
    default:
      console.log("Invalid operator");
  }
} else {
  console.log("Calculator skipped (missing inputs)");
}


// ================================
// 8) SIMPLE HTTP SERVER
// ================================
console.log("\n=== HTTP SERVER DEMO ===");

const server = http.createServer((req, res) => {
  res.write("Hello from Node.js Server!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3001");
});

  res.write("Hello from Node.js Server!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
