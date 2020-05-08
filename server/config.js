const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Rockybreezy03',
    database : 'Food'
});

module.exports = connection