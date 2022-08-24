import { Router } from "express";
import cartController from "../../controllers/cartControllers.js";

const cartRouter = Router()

cartRouter.get('/', cartController.getAllCarts)
cartRouter.post('/:id', (req, res) => cartController.getById(req, res))
cartRouter.post('/products/:productId', (req, res) => cartController.saveProduct(req, res))

export default cartRouter