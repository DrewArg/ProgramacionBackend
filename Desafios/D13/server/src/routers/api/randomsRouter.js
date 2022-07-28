import { Router } from "express";
import { calculateBlocking } from "../../controllers/blockingController.js";
import { calculateNoBlocking } from "../../controllers/notBlockingController.js"

const randomRouter = Router();

randomRouter.post("/blockingRandom", (req, res) => calculateBlocking(req, res));

randomRouter.post("/notBlockinRandom", (req, res) => calculateNoBlocking(req, res));



export default randomRouter;
