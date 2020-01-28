const mongoose = require('mongoose')

// Schema on MongoDB
const ProdSchema = new mongoose.Schema({
  name: String,
  description: String,
  detail: String,
  imgUrl: String,
  price: Number,
  amount: Number    
})

module.exports = mongoose.model('Prod', ProdSchema)