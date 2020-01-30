const port = 4444
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://marcos:l4cun4@cluster0-hnlwd.mongodb.net/simple?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.use(routes)

app.listen(process.env.PORT || port, () => console.log(`Listening on port: ${port}`))
