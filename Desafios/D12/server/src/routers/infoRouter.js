import { Router } from "express";
import { infoController } from "../controllers/infoControllers.js";

const infoRouter = Router();

infoRouter.post("/info", (req, res) => infoController(req, res));
infoRouter.get("/info", (req, res) => infoController(req, res));

export default infoRouter;
