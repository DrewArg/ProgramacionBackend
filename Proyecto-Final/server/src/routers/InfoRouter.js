import { Router } from "express";
import { infoController } from "../controllers/infoControllers.js";

const infoRouter = Router();

infoRouter.get("/", (req, res) => infoController(req, res));

export default infoRouter;
