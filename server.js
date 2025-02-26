const express = require('express');
const bodyParser = require('body-parser'); // Perbaiki penamaan

const app = express();

// Parses application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//panggil routes
var routes = require('./routes');
routes(app);

app.listen(8080, () => {
    console.log('Server started on port 8080');
});