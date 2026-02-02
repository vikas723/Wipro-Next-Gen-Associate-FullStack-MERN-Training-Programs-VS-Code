const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//     const data = fs.readFileSync("bigfile.txt", "utf8");
//     res.writeHead(200, {"content-type": "text/plain"});
//     res.end(data);
// });
// server.listen(3000);


//using Asynchronous method
const server = http.createServer((req, res) => {
    const data = fs.readFile("bigfile.txt", "utf8",()=>{
        
    });
    res.end("file read completed");
});
server.listen(3000);

