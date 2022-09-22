import { Router } from "express";
import productRouter from "./productRouter.js";
import messageRouter from "./messageRouter.js";
import authRouter from "./authRouter.js";
import randomRouter from "./randomsRouter.js"
import { secretRouter } from './secretRouter.js'

const apiRouter = Router();

apiRouter.use("/api", productRouter);
apiRouter.use("/api", messageRouter);
apiRouter.use("/auth", authRouter)
apiRouter.use("/api", secretRouter)
apiRouter.use("/api", randomRouter)

apiRouter.all("*", (req, res) => {
  res.status(404).json({
    error: 404,
    description: `ruta ${req.url} método ${req.method} no autorizada`,
  });
});

export default apiRouter;
