const express = require('express');  // Tambahkan ini!
const bodyParser = require('body-parser'); // Tambahkan ini!
const morgan = require('morgan');

const app = express();

// Parses application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Panggil routes
const routes = require('./routes');
routes(app);

// Daftarkan menu routes dari index
app.use('/auth', require('./middleware')); // Pastikan 'middleware.js' ada

app.listen(8080, () => {
    console.log('Server started on port 8080');
});