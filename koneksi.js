var mysql = require('mysql');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'realtime'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('mysql terkoneksi');
});

<<<<<<< HEAD
module.exports = conn;
=======
module.exports = conn;
>>>>>>> 03518a1 (menambahkan kode res)
