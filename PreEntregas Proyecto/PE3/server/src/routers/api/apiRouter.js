import { Router } from "express";
import apiAuthRouter from './apiAuthRouter.js'
import apiCartRouter from "./apiCartRouter.js";
import apiProductRouter from "./apiProductRouter.js";
import apiUserRouter from "./apiUserRouter.js";

const apiRouter = Router()

apiRouter.use('/auth', apiAuthRouter)
apiRouter.use('/api', apiProductRouter)
apiRouter.use('/account', apiUserRouter)
apiRouter.use('/carts', apiCartRouter)

apiRouter.use('/', (req, res) => { res.status(200) })
apiRouter.all('*', (req, res) => {
    res.status(404).json({
        error: 404,
        description: `ruta ${req.url} método ${req.method} no encontrada`
    })
})

export default apiRouter