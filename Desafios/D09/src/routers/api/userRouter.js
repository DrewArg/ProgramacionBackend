import { Router } from "express";
import userController from "../../controllers/userControllers.js"

const productRouter = Router();

productRouter.get("/mockUsers", userController.getMockUserData);

export default productRouter;
