console.log("Node JS is running");


const http = require("http");

http.createServer((req, res) => {
  res.write("Welcome to Node JS Server ...");
  res.end();
}).listen(3000);

console.log("Server running at http://localhost:3000");


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Server is running');
});