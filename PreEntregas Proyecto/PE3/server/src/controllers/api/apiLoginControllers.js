import passport from "passport";
import { winston } from "../loggerControllers";

export const isLoggedIn = (req, res) => {
  if (req.session.passport != null) {
    winston.log('info', `apiLoginControllers --> passport logged`)
    res.send(true);
  } else {
    winston.log('warn', `apiLoginControllers --> passport NOT logged`)
    res.send(false);
  }
};

export const loginController = (req, res) => {
  passport.authenticate("local-login", async (error, user, options) => {
    if (user) {
      await req.logIn(user, async () => {
        const session = req.session;
        session.name = req.body.username;
        return await res.json(user);
      });
    } else if (options) {
      return res.json(options);
    } else {
      winston.log('info', `apiLoginControllers --> passport OK`)
      return res.status(204).send("");
    }
  })(req, res);
};

export const logoutController = (req, res) => {
  if (req.session.passport) {
    req.logout(function (err) {
      if (err) {
        winston.log('error', `apiLoginControllers --> ${err}`)
        return next(err);
      }
      res.redirect('/');
    });
  }
};


