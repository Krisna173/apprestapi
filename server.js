const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Panggil routes
const routes = require('./routes'); // Import dengan benar
routes(app); // Pastikan ini dipanggil sebagai fungsi

// Middleware tambahan
app.use('/auth', require('./middleware'));

app.listen(8080, () => {
    console.log('Server started on port 8080');
});