const express = require('express')
const { index, show, store, update, destroy } = require('./controllers/ProdController')

const routes = express()

// Routes
routes.get('/prod', index)
routes.get('/prod/:id', show)
routes.post('/prod', store)
routes.put('/prod/:id', update)
routes.delete('/prod/:id', destroy)

module.exports = routes;