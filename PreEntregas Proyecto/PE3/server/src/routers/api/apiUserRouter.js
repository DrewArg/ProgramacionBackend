import { Router } from "express";
import { userController } from '../../controllers/userControllers.js'

const apiUserRouter = Router()

apiUserRouter.use(function (req, res, next) {
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

apiUserRouter.get("/info", (req, res) => userController.getUserInfo(req, res))
apiUserRouter.get("/userId", (req, res) => userController.getUserId(req, res))
apiUserRouter.post("/isAdmin", (req, res) => userController.isAdmin(req, res))

export default apiUserRouter