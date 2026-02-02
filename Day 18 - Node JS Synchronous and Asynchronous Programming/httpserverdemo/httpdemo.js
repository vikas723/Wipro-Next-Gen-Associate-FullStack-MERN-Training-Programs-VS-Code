// route handling 

// const http = require("http")
// const users = [{id:1, name:"Vikas"},{id:2, name: "Viyaas"}] 
// const server = http.createServer((req, res)=>{
//     if(req.url === "/health"){
//     res.writeHead(200, {"Content-Type": "text/plain"});
    
//     // res.write("Hello Node Server");
//     res.write("Server is healthy");
   
//     return;
// }
// // else if(req.url === "/time")
// // {
// //     res.writeHead(200, { "Content-Type": "text/plain" });
// //     res.end(new Date().toString);
// // }
// // else if(req.url == "/users")
// // {
// //     res.writeHead(200, { "Content-Type": "application/json" })
// //     res.end()
// // }
// res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
// });

// server.listen(3001,()=>{
    
//    console.log("Server running on port 3001");
// })



// // const http = require('http');

// // http.createServer((req, res) => {

// //     res.writeHead(200, { 'Content-Type': 'text/plain' });

// //     res.write("Hello ");
// //     res.write("World");

// //     res.end();   // only once
// //     if(req.url === "/"){
// //     res.end("Home Page");
// //     return;  // prevents further execution
// // }

// // res.end("Other Page");


// // }).listen(4000);

// // console.log("Server running on port 3001");


const http = require("http");
const users =[{id:1,name:"Vikas"},{id:2,name:"Vihaan"}];

const server = http.createServer((req, res) => {
    const parsedurl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedurl.pathname;
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is healthy");
  } 
  else if (pathname === "/time"){
     res.writeHead(200, { "Content-Type": "text/plain" });
     res.end(new Date().toString());
  }
   else if (pathname === "/users"){
     res.writeHead(200, { "Content-Type": "application/json" });
     res.end(JSON.stringify(users));
  }
  else{
    res.writeHead(404)
    res.end("No proper routing found");
  }
});
server.listen(3001);