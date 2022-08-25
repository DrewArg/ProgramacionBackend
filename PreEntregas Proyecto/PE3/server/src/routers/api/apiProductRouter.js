import { Router } from "express";
import apiProductController from "../../controllers/api/apiProductControllers.js";

const apiProductRouter = Router()

apiProductRouter.post('/products/:id', (req, res) => apiProductController.getById(req, res))
apiProductRouter.post('/products/update/prod', (req, res) => apiProductController.updateProduct(req, res))

export default apiProductRouter