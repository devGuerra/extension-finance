const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb+srv://write:write@cluster0-zanqa.mongodb.net/oministack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, () => console.log('Server Online'));

module.exports = server