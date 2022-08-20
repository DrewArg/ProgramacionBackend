import { Router } from "express";
import { registerController } from '../../controllers/registerControllers.js'
import { loginController, logoutController } from '../../controllers/loginControllers.js'

const authRouter = Router()

authRouter.use((req, res, next) => {
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

authRouter.post("/register", (req, res) => registerController(req, res))
authRouter.posr("/login", (req, res) => loginController(req, res))
authRouter.post("/logout", (req, res) => logoutController(req, res))

export default authRouter