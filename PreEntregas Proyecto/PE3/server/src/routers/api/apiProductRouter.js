import { Router } from "express";
import apiProductController from "../../controllers/api/apiProductControllers.js";

const apiProductRouter = Router()

apiProductRouter.post('/products/:id', (req, res) => apiProductController.getById(req, res))
apiProductRouter.post('/products/update-product', (req, res) => apiProductController.getById(req, res))

export default apiProductRouter