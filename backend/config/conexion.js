const mysql = require('mysql');

const conexion = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'YOUR_PASSWORD_HERE',
  port: 3306,
  database: 'database_name',
  connectionLimit: 10,
  acquireTimeout: 20000,
});

module.exports = conexion;