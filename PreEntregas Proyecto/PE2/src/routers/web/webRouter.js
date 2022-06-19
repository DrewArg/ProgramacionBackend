import { Router } from "express";
import webControllers from "../../controllers/webControllers.js";

const webRouter = Router();

webRouter.get("/", webControllers.webGetRootController);
webRouter.post("/", webControllers.webGetRootController);

webRouter.get("/cart", webControllers.webGetCartController);
webRouter.get("/*", webControllers.webGet404Controller);

export default webRouter;
