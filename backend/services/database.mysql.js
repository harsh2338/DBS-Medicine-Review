var mysql = require('mysql2');
var config = require('../config/db.config');

var conn = mysql.createConnection(config.db);

conn.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

module.exports = conn;