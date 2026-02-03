const http = require("http");
const fs = require("fs");
const router = require("./router");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  if (pathname === "/") {
    fs.readFile("./public/index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else {
    router(req, res, pathname);
  }
});

server.listen(3002, () => {
  console.log("Server running at http://localhost:3002");
});
