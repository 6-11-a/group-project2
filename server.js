// module imports
const express      = require('express');
const mongoose     = require('mongoose');
const path         = require('path');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const db           = require('./config/db');
const app          = express();
console.log("hello world")
// app middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, 'client/build')));

require('./models/product');
require('./models/user');

let products = require('./routes/products');
app.use('/products', products);

let users = require('./routes/users');
app.use('/users', users);


// PRODUCTION ONLY
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Development mode port
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));



mongoose.connect(db.url);
app.listen(port)

module.exports = app;
