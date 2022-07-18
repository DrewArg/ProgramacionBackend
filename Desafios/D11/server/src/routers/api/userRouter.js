import { Router } from "express";
import { userController } from "../../controllers/userControllers.js"

const userRouter = Router();


// userRouter.get('/', userController.getUsers)
userRouter.get("/mockUsers", userController.getMockUserData);

export default userRouter;
