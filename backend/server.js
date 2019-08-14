const express = require('express');
const app = express();
const indexRoute = require('./src/Routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', indexRoute);

app.listen(3333, () => console.log('Server Online'))

module.exports = app