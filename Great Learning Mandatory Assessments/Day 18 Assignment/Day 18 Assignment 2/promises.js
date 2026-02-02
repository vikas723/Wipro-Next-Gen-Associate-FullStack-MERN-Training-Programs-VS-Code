const fs = require("fs").promises;
fs.readFile("input.txt", "utf-8").then(data =>{
    return fs.writeFile("output.txt", data);

})
.then(()=>{
    console.log("File Copied Sucessfully");
})
.catch(err => {
    console.log("Error: ", err);
})