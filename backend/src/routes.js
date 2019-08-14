const express = require('express')
const axios = require('axios')
const routes = express.Router();
const InvestidorController = require('./Controller/InsvestidorController')

routes.get('/', async (req, res) => { })
routes.post('/', InvestidorController.store)

module.exports = routes