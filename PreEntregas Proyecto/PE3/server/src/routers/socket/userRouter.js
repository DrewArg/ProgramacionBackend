import { Router } from "express";
import { userController } from '../../controllers/userControllers.js'

const userRouter = Router()

userRouter.post("/update", userController.saveUser)

export default userRouter