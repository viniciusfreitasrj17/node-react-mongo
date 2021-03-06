const Prod = require('../model/Prod')

// Controller Functions:

// index, show, store, update, destroy

module.exports = {
    async index(req, res) {
        let prod
        try {
            prod = await Prod.find()
        } catch(e) {
            res.status(400).json({ error: e.message })
        }

        return res.json(prod)
    },

    async show(req, res) {
        const _id = req.params.id
        let prod
        try {
            prod = await Prod.findOne({ _id })
        } catch(e) {
            res.status(400).json({ error: e.message })
        }

        return res.json(prod)
    },

    async store(req, res) {
        const { name, description, detail, imgUrl, price, amount } = req.body
        let prod
        try {
            prod = await Prod.create({
                name,
                description,
                detail,
                imgUrl,
                price,
                amount
            })
        } catch(e) {
            res.status(400).json({ error: e.message })
        }
            
        return res.json(prod)
    },

    async update(req, res) {
        const prod = req.body
        const _id = req.params.id
        let data              // Precisava desta variárel pois o tratamento do erro não ocorria com o prod estando no await
        
        try {
            if(prod) {
                data = await Prod.updateOne({ _id }, {
                    $set: prod
                })
            }
        } catch(e) {
            res.status(400).json({ error: e.message })
        }
        
        return res.json(data)
    },

    async destroy(req, res) {
        const _id = req.params.id
        let prod
        try {
            prod = await Prod.deleteOne({ _id })
        } catch(e) {
            res.status(400).json({ error: e.message })
        }

        res.json(prod)
    }
}