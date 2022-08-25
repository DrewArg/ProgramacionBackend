import { productsDao } from '../../daos/daoIndex.js'
import { userController } from '../userControllers.js'

export const apiProductController = {

    async getById(req, res) {
        try {
            const bars = await req.url.split("/")
            const split = bars[2].split(":")
            const prod = await productsDao.listById(split[2])
            res.json(prod)
        } catch (error) {
            console.error(`Product controller --> ${error}`);
        }
    },


    async updateProduct(req, res) {

        if (req.session.passport) {
            const updTitle = req.body.title
            const updPrice = req.body.price
            const prodId = req.body



            if (user) {
                user.fullName = updFullname
                user.address = updAddress
                user.age = updAge
                user.phone = updPhone
                userController.updateUser(user)
            }
        } else {
            res.json("usuario no ingresado")
        }

    },
}

export default apiProductController