const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter feedback: ", (input) => {

  fs.writeFile("feedback.txt", input, (err) => {
    if (err) throw err;

    console.log("Data written successfully.");
    console.log("Reading file...");

    fs.readFile("feedback.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
      rl.close();
    });
  });

});
