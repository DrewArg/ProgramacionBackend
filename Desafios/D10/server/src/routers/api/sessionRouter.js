import { Router } from "express";
import sessionsControllers from "../../controllers/sessionsControllers.js";

const sessionRouter = Router();

sessionRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
    );
    if ("OPTIONS" == req.method) {
      res.send(200);
    } else {
      next();
    }
  });

sessionRouter.post("/login", sessionsControllers.login);

sessionRouter.post("/logout", sessionsControllers.logout);

export default sessionRouter;
