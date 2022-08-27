import { Router } from "express";
import apiProductController from "../../controllers/api/apiProductControllers.js";

const apiProductRouter = Router()

apiProductRouter.post('/products/:id', (req, res) => apiProductController.getById(req, res))
apiProductRouter.post('/products/update/prod', (req, res) => apiProductController.updateProduct(req, res))
apiProductRouter.delete('/products/delete/prod', (req, res) => apiProductController.deleteById(req, res))

export default apiProductRouter