import { Router } from "express";
import { secretController } from '../../controllers/secretControllers.js'
import { authenticationRequired } from '../../middlewares/authorization.js'

export const secretRouter = new Router()

secretRouter.get('/', authenticationRequired, secretController.getTopSecretIntel)