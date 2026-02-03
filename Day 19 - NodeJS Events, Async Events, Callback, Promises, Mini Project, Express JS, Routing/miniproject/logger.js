const fs = require("fs").promises;
async function log(message)
{
    const time = new Date().toLocaleString();
    await fs.appendFile("logs.txt", `${time} - ${message}\n`);
}
module.exports = log;