import { readFile } from "@babel/core/lib/gensync-utils/fs.js";
import { Router } from "express";
import { userController } from '../../controllers/userControllers.js'

const userRouter = Router()

userRouter.use(function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", req.headers.origin)
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept")

    if ("OPTIONS" == req.method) {
        res.send(200)
    } else {
        next()
    }
})

userRouter.get("/info", (req, res) => userController.getUserInfo(req, res))
userRouter.post("/update", userController.saveUser)
userRouter.post("/isAdmin", (req, res) => userController.isAdmin(req, res))

export default userRouter