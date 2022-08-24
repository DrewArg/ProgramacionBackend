import { Router } from "express";
import cartController from "../../controllers/cartControllers.js";

const cartRouter = Router()

cartRouter.get('/products/:id', (req, res) => cartController.getCartProducts(req, res))
cartRouter.post('/:id', (req, res) => cartController.getById(req, res))
cartRouter.post('/products/:productId/:quantity', (req, res) => cartController.saveProduct(req, res))

export default cartRouter