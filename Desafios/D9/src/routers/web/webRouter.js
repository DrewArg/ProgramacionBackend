import { Router } from "express";
import { webGetRootController } from "../../controllers/webControllers.js";

const webRouter = new Router();

webRouter.get("/", webGetRootController);
webRouter.post("/", webGetRootController);

export default webRouter;
