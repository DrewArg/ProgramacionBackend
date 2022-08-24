import { productsDao } from '../../daos/daoIndex.js'

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
}

export default apiProductController