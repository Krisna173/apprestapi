const express = require('express');
const bodyParser = require('body-parser'); // Perbaiki penamaan

const app = express();

// Parses application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3006, () => {
    console.log('Server started on port 3000');
});