const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'manager',
    pasword: 'Password',
    database: 'db',
    host: 'backend-db',
    port: '3306'
});

//Attempting to connect to the database.
pool.getConnection((err, connection) => {
    if (err)
        console.error("Error with database connection")
    if (connection)
        connection.release()
    return;
});

pool.query = util.promisify(pool.query)

module.exports = pool;