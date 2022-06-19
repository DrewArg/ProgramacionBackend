import { Router } from "express";
import productRouter from "./productRouter.js";
import cartRouter from "./cartRouter.js";

const apiRouter = Router();

apiRouter.use("/api", productRouter);
apiRouter.use("/api", cartRouter);

apiRouter.all("*", (req, res) => {
  res.status(404).json({
    error: 404,
    description: `ruta ${req.url} método ${req.method} no autorizada`,
  });
});

export default apiRouter;
