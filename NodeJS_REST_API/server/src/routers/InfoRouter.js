import { Router } from "express";
import { infoController } from "../controllers/InfoControllers.js";

const infoRouter = Router();

infoRouter.get("/", (req, res) => infoController(req, res));

export default infoRouter;
