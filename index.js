const port = 4000
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const restful = require('node-restful')

const mongodbRest = restful.mongoose

app.use(express.json())

app.listen(process.env.PORT || port, () => console.log(`Listening on port: ${port}`))

mongoose.connect('mongodb://localhost/simple', { useNewUrlParser: true, useUnifiedTopology: true })

const prod = restful.model('prod', new mongodbRest.Schema({
    name: { type: String, require: true },
    valor: { type: Number, require: true }
}))

prod.methods(['get', 'post', 'put', 'delete'])

prod.updateOptions({ new: true, runValidators: true })

function routes (server) {
    const router = express.Router()
    server.use('/', router)

    prod.register(router, '/prod')
}

routes(app)