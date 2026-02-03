const fs = require("fs").promises;
const log = require("./logger");
const emitter = require("./events");

async function router(req, res, pathname) {

  if (pathname === "/health") {
    await log("Health Check Hit");
    res.end("Server Healthy");
  }

  else if (pathname === "/login") {
    await log("Login Request");
    emitter.emit("userLogin", "Guest");
    res.end("Login Success");
  }

  else if (pathname === "/users") {
    await log("Users Viewed");
    const data = await fs.readFile("users.json");
    emitter.emit("dataFetched");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  }

  else {
    res.writeHead(404);
    res.end("Route Not Found");
  }
}

module.exports = router;
