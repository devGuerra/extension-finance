const express = require('express')
const axios = require('axios')
const router = express.Router();

router.get('/', async (req, res) => {
    var ativ = req.query.ativo;

    var response = await axios.get(`https://api.hgbrasil.com/finance/stock_price?key=0817d68d&symbol=${ativ}`);

    var { results } = response.data

    return res.json(results)
})
router.post('/', (req, res) => {
    return res.send({ message: 'POST in root is ok!' })
})

module.exports = router