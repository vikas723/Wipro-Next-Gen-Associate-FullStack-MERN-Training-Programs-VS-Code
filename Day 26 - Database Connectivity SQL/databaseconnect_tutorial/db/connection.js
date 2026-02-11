
const mysql = require("mysql2/promise");
require("dotenv").config(); // It will load the environment variables from the .env files into process.env

const pool = mysql.createPool({ //Pool = Group of connections, Pool keeps 10 ready connections
host : process.env.DB_HOST,
user: process.env.DB_USER,
password : process.env.DB_PASSWORD,
database: process.env.DB_NAME,
connectionLimit: 10, // limits the number of connections in the pool
waitForConnections : true, // waits for a connection to be available before the 
})
module.exports = pool;