import { productsDao } from '../../daos/daoIndex.js'
import { winston } from '../loggerControllers.js'

export const apiProductController = {

    async getById(req, res) {
        try {
            const bars = await req.url.split("/")
            const split = bars[2].split(":")
            const prod = await productsDao.listById(split[2])
            res.json(prod)
        } catch (error) {
            winston.log('error', `apiProductController --> ${error}`)
        }
    },

    async deleteById(req, res) {
        try {
            if (req.session.passport) {
                productsDao.deleteById(req.body.id)
                res.json("ok")
            }
        } catch (error) {
            winston.log('error', `apiProductController --> ${error}`)
        }
    },


    async updateProduct(req, res) {
        if (req.session.passport) {
            try {
                const prod = await productsDao.listById(req.body.id)

                if (req.body.title !== '') {
                    if (req.body.title !== prod.title) {
                        prod.title = req.body.title
                    }
                }
                if (req.body.description !== '') {
                    if (req.body.description !== prod.description) {
                        prod.description = req.body.description
                    }
                }
                if (req.body.stock !== '') {
                    if (req.body.stock !== prod.stock) {
                        prod.stock = req.body.stock
                    }
                }
                if (req.body.price !== '') {
                    if (req.body.price !== prod.price) {
                        prod.price = req.body.price
                    }
                }
                if (req.body.thumbnail !== '') {
                    if (req.body.thumbnail !== prod.thumbnail) {
                        prod.thumbnail = req.body.thumbnail
                    }
                }
                if (req.body.alt !== '') {
                    if (req.body.alt !== prod.alt) {
                        prod.alt = req.body.alt
                    }
                }

                await productsDao.updateObject(prod)
                res.json("ok")
            } catch (error) {
                winston.log('error', `apiProductController --> ${error}`)
            }


        }

    },
}

export default apiProductController