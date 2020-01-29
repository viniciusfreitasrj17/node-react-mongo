const Prod = require('../model/Prod')
const ifHaveFilter = require('../utils/ifHaveFilter')

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
        const { name, description, detail, imgUrl, price, amount } = req.body
        const _id = req.params.id
        let prod = await Prod.findOne({ _id })
        const dest = ifHaveFilter(prod,{ name, description, detail, imgUrl, price, amount })

        if (prod) {
            prod = Prod.update({ _id }, {
                $set: {
                    dest
                }
            })
        }

        res.json(prod)
    },

    async destroy(req, res) {
        const _id = req.params.id
        const prod = Prod.remove({ _id })

        res.json(prod)
    }
}