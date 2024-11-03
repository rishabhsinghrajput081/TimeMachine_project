// db/database.js
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,         // RDS endpoint
  user: process.env.DB_USER,         // RDS username
  password: process.env.DB_PASSWORD, // RDS password
  database: process.env.DB_NAME,     // RDS database name
  port: process.env.DB_PORT || 3306, // Default MySQL port, change if needed
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the Amazon RDS database:', err);
    throw err;
  }
  console.log('Connected to Amazon RDS MySQL');
});

module.exports = connection;
