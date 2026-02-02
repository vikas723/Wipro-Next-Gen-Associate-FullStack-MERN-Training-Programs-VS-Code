const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Hello from Node.js Server");
    }
    else if(req.url === "/about")
    {
        res.end("About Page");
    }
});
server.listen(4000, () =>{
    console.log("Server running at http://localhost:4000");
})