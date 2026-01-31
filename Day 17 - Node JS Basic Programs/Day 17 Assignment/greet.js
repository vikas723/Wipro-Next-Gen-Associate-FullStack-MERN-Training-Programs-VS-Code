// greet.js

const moment = require("moment");

// Get name from command line
const name = process.argv[2];

// Check if name is provided
if (!name) {
  console.log("Please provide your name.");
  process.exit();
}

// Format date and time
const currentDateTime = moment().format("ddd MMM D YYYY, h:mm A");

// Output greeting
console.log(`Hello, ${name}! Today is ${currentDateTime}`);

//Execution Process => Node greet.js your name