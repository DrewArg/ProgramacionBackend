import { Router } from "express";
import productController from "../../controllers/productControllers.js";

const productRouter = Router()

productRouter.get('/products', productController.getAllProducts)
productRouter.post('/products/:id', (req, res) => productController.getById(req, res))
productRouter.post('/products', productController.saveProduct)
productRouter.put('/products/:id', productController.updateProduct)
productRouter.delete('/products/:id', productController.deleteById)

export default productRouter