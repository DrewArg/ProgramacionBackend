import { Router } from "express";
import authController from "../../controllers/authControllers.js";

import { registerController, failRegisterController, successRegisterController } from "../../controllers/registerControllers.js";

import { failLoginController, logoutController, loginController, successLoginController } from "../../controllers/loginControllers.js";

const authRouter = Router();

authRouter.use(function (req, res, next) {
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

authRouter.post("/register", registerController);
authRouter.post("/successRegister", successRegisterController);
authRouter.post("/failRegister", failRegisterController);

authRouter.post('/login', loginController)
authRouter.post('/successLogin', successLoginController)
authRouter.post('/failLogin', failLoginController)

authRouter.get('/logout', logoutController)



// authRouter.post("/login", authController.login);
// authRouter.post("/logout", authController.logout);

export default authRouter;
