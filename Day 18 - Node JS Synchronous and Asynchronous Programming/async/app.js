// fs using Synchronous method

// const fs = require("fs");

// console.log("Start");

// const data = fs.readFileSync("bigfile.txt", "utf-8"); // blocking
// console.log("File Read Complete");
// console.log(data);

// console.log("End");


// fs using asynchronous method
const fs = require("fs");

console.log("Start");

fs.readFile("bigfile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log("File Read Complete");
  console.log(data);
});

console.log("End");
