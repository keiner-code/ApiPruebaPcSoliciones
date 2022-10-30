const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pcsoluciones',
    password: 'keiner123',
});

module.exports =connection;