import { Router } from "express";
import { apiUserController } from '../../controllers/api/apiUserControllers.js'

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

apiUserRouter.post("/update-info", (req, res) => apiUserController.updateUserInfo(req, res))
apiUserRouter.get("/info", (req, res) => apiUserController.getUserInfo(req, res))
apiUserRouter.get("/userId", (req, res) => apiUserController.getUserId(req, res))
apiUserRouter.post("/isAdmin", (req, res) => apiUserController.isAdmin(req, res))

export default apiUserRouter