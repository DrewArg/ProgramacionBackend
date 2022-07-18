import { Router } from "express";
import productRouter from "./productRouter.js";
import messageRouter from "./messageRouter.js";
import userRouter from "./userRouter.js"
import authRouter from "./authRouter.js";
import { secretRouter } from './secretRouter.js'
import authController from "../../controllers/authControllers.js";

const apiRouter = Router();

apiRouter.use("/api", productRouter);
apiRouter.use("/api", messageRouter);
apiRouter.use("/api", userRouter);
apiRouter.use("/auth", authRouter)
apiRouter.use("/api", secretRouter)

apiRouter.use("/", authController.isLogged)

apiRouter.all("*", (req, res) => {
  res.status(404).json({
    error: 404,
    description: `ruta ${req.url} método ${req.method} no autorizada`,
  });
});

export default apiRouter;
