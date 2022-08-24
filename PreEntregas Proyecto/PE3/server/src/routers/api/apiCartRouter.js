import { Router } from "express";
import cartController from "../../controllers/cartControllers.js";

const apiCartRouter = Router()

apiCartRouter.get('/products', (req, res) => cartController.getCartProducts(req, res))
apiCartRouter.post('/:id', (req, res) => cartController.getById(req, res))
apiCartRouter.post('/products/:productId/:quantity', (req, res) => cartController.saveProduct(req, res))

export default apiCartRouter