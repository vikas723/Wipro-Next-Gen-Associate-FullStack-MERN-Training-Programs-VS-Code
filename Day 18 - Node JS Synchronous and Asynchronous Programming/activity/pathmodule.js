const path = require("path");
const basePath = __dirname;
const logsPath = path.join(basePath, "logs", "app.log");

console.log(basePath, logsPath, path.basename(logsPath), path.extname(logsPath));
