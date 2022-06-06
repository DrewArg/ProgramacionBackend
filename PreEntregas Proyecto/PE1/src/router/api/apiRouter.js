const express = require("express");

const apiRouter = express.Router();

apiRouter.all("*", (req, res) => {
  res
    .status(404)
    .json({
      error: 404,
      description: `ruta ${req.url} método ${req.method} no autorizada`,
    });
});

module.exports = apiRouter;
