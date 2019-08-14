const { Schema, model } = require('mongoose');

const InvestidorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  ativo: {
    symbol: {
      type: String,
      required: false,
    },
    buy_price: {
      type: Number,
      required: false,
    },
    quantidy: {
      type: Number,
      required: false
    },
  }
}, {
    timestamps: true,
  })

module.exports = model('Investidor', InvestidorSchema);

