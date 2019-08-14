import axios from 'axios'

export default async function (type) {
  const response = await axios.get(`https://api.hgbrasil.com/finance/stock_price?key=0817d68d&symbol=${type}`)

  console.log(response)
}