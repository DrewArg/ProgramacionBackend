import { Router } from "express";
import authRouter from './authRouter.js'
import productRouter from './productRouter.js'

const apiRouter = Router()

apiRouter.use('/api',authRouter)
apiRouter.use('/api',productRouter)

apiRouter.all('*',(req,res)=>{
    res.status(404).json({
        error:404,
        description: `ruta ${req.url} método ${req.method} no encontrada`
    })
})

export default apiRouter