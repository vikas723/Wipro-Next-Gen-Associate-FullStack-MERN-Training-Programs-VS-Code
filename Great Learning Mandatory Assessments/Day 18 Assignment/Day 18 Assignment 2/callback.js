const fs = require("fs");
console.log("Reading file...");
fs.readFile("data.txt", "utf8", (err, data)=>{
    if(err) throw err;
    console.log(data);

    setTimeout(()=>{
        console.log("Read Operation Completed");

    },1000);
})