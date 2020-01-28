const Prod = require('../model/Prod')

// Controller Functions:

// index, show, store, update, destroy

module.exports = {
    async index(req, res) {
        const prod = await Prod.find()

        return res.json(prod)
    },

    async show(req, res) {
        const _id = req.params.id
        const prod = await Prod.findOne({ _id })

        return res.json(prod)
    },

    async store(req, res) {
        const { name, description, detail, imgUrl, price, amount } = req.body
        const prod = await Prod.create({
                name,
                description,
                detail,
                imgUrl,
                price,
                amount
            })
            
        return res.json(prod)
    },

    async update(req, res) {
        let prod = req.body
        const _id = req.params.id

        if(prod) {
            prod = await Prod.updateOne({ _id }, {
                $set: prod
            })
        }

        res.json(prod)
    },

    async destroy(req, res) {
        const _id = req.params.id
        const prod = await Prod.deleteOne({ _id })

        res.json(prod)
    }
}