const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',   // Sesuaikan dengan konfigurasi MySQL
  user: 'root',        // Sesuaikan dengan user MySQL
  password: '',        // Sesuaikan dengan password
  database: 'realtime'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL connected');
});

module.exports = connection;