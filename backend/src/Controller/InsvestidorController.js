const axios = require('axios');
const Investidor = require('../Models/Investidor');

module.exports = {
  async store(req, res) {
    const { username, ativo, name, quantidy } = req.body;

    const acao = ativo + "";

    const userExists = await Investidor.findOne({ user: username })

    if (userExists) {
      return res.json(userExists);
    }

    const response = await axios.get(`https://api.hgbrasil.com/finance/stock_price?key=0817d68d&symbol=${acao}`);
    console.log(typeof (MGLU3))

    const { symbol, price } = response.data.results.MGLU3

    const investidor = await Investidor.create({
      name,
      user: username,
      ativo: {
        symbol,
        buy_price: price,
        quantidy,
      },

    })

    return res.json(investidor)
  }
}