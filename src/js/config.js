const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'f32*AG17re9!',
    database: 'mydb',
});

module.exports = db;
