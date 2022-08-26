import { Router } from "express";
import userRouter from './userRouter.js'
import productRouter from '../socket/productRouter.js'

const socketRouter = Router()

socketRouter.use('/products', productRouter)
socketRouter.use('/account', userRouter)

export default socketRouter