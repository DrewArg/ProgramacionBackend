import passport from "passport";
import { sessionsDao } from "../../daos/daoIndex.js";

export const isLoggedIn = (req, res) => {
  if (req.session.passport != null) {
    res.send(true);
  } else {
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
      return res.status(204).send("");
    }
  })(req, res);
};

export const logoutController = (req, res) => {
  if (req.session.passport) {
    req.logout(function (err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  }
};


