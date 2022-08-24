import { Router } from "express";
import apiCartController from "../../controllers/api/apiCartControllers.js";

const apiCartRouter = Router()

apiCartRouter.get('/products', (req, res) => apiCartController.getCartProducts(req, res))
apiCartRouter.post('/:id', (req, res) => apiCartController.getById(req, res))
apiCartRouter.post('/products/:productId/:quantity', (req, res) => apiCartController.saveProduct(req, res))
apiCartRouter.get('/products/:productId/:quantity', (req, res) => apiCartController.updateProduct(req, res))

export default apiCartRouter