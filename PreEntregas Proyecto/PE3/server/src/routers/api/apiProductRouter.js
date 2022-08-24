import { Router } from "express";
import productController from "../../controllers/productControllers.js";

const apiProductRouter = Router()

apiProductRouter.post('/products/:id', (req, res) => productController.getById(req, res))

export default apiProductRouter