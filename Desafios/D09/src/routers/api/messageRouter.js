import { Router } from "express";
import messageController from "../../controllers/messageControllers.js";

const messageRouter = Router();

messageRouter.get("/messages", messageController.getAllMessages);

messageRouter.post("/messages", messageController.saveMessage);

export default messageRouter;
