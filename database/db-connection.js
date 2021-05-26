var mysql = require('mysql')

var connection;

function dbConnection() {
    if (!connection) {
        connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '7278',
            database: 'company',
            insecureAuth:true
        })
    }
    return connection
}
module.exports = dbConnection()