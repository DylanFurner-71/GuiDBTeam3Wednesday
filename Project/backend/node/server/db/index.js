const mysql = require('mysql');

mysql.createPool({
    connectionLimit: 10,
    user: 'manager',
    pasword: 'Password',
    database: 'db',
    host: 'backend-db',
    port: '3306'
});

