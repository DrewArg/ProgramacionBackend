import { Router } from "express";
import authRouter from './authRouter.js'
import productRouter from './productRouter.js'
import userRouter from "./userRouter.js";
import cartRouter from "./cartRouter.js";

const apiRouter = Router()

apiRouter.use('/auth', authRouter)
apiRouter.use('/api', productRouter)
apiRouter.use('/account', userRouter)
apiRouter.use('/carts', cartRouter)

apiRouter.use('/', (req, res) => { res.status(200) })
apiRouter.all('*', (req, res) => {
    res.status(404).json({
        error: 404,
        description: `ruta ${req.url} método ${req.method} no encontrada`
    })
})

export default apiRouter