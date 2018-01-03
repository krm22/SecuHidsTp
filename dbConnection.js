var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 20,
    host:'localhost',
    user:'root',
    password: 'MasterMason22',
    database: 'secuInterface'
});

module.exports = connection;