const mysql = require('mysql');


module.exports = {
mySqlConnection: mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sap@123',
        database: 'cric_world'
    })
}