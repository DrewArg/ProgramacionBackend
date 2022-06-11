const express = require("express");
const { cartIdController } = require("../../controllers/cartIdControllers.js");

const cartIdRouter = express.Router();

cartIdRouter.get("/activeCartId", cartIdController.getCurrentId);
cartIdRouter.post("/activeCartId/:id", cartIdController.saveCurrentId);

module.exports = cartIdRouter;
