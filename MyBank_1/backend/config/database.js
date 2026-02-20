const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',           // XAMPP default
    password: '',           // XAMPP default (empty)
    database: 'myfin_bank',
    port: 3306,             // XAMPP MySQL port
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();
module.exports = promisePool;