import { Router } from "express";
import { registerController } from '../../controllers/api/apiRegisterControllers.js'
import { isLoggedIn, loginController, logoutController } from '../../controllers/api/apiLoginControllers.js'

const apiAuthRouter = Router()

apiAuthRouter.use(function (req, res, next) {
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



apiAuthRouter.post("/register", (req, res) => registerController(req, res))
apiAuthRouter.post("/login", (req, res) => loginController(req, res))
apiAuthRouter.get("/logout", (req, res) => logoutController(req, res))
apiAuthRouter.post("/isLogged", (req, res) => isLoggedIn(req, res))


export default apiAuthRouter