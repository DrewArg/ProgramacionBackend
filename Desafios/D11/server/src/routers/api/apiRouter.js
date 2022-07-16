import { Router } from "express";
import productRouter from "./productRouter.js";
import messageRouter from "./messageRouter.js";
import userRouter from "./userRouter.js"
import sessionRouter from "./sessionRouter.js";
import { secretRouter } from './secretRouter.js'
import sessionController from "../../controllers/sessionsControllers.js";

const apiRouter = Router();

apiRouter.use("/api", productRouter);
apiRouter.use("/api", messageRouter);
apiRouter.use("/api", userRouter);
apiRouter.use("/api", sessionRouter)
apiRouter.use("/api", secretRouter)

apiRouter.use("/", sessionController.isLogged)

apiRouter.all("*", (req, res) => {
  res.status(404).json({
    error: 404,
    description: `ruta ${req.url} método ${req.method} no autorizada`,
  });
});

export default apiRouter;
