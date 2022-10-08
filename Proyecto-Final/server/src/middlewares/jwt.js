import jwt from "jsonwebtoken";
import { SECRET } from "../config/config.js";
import { winston } from "../controllers/loggersControllers.js";
import { usersService } from "../service/index.js";
import bcrypt from "bcryptjs";

export function generateAuthToken(email, password) {
  const token = jwt.sign({ email, password }, SECRET, { expiresIn: 86400 });
  return token;
}

export async function authorize(req, res, next) {
  try {
    const authHeader =
      req.headers["authorization"] || req.headers["Authorization"] || "";

    if (!authHeader) {
      winston.error("jwt --> el usuario no está autenticado");
      res.status(401).json("UNAUNTHORIZED");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      winston.error("jwt --> el usuario no está autenticado");
      res.status(401).json("UNAUNTHORIZED");
    }

    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;

    const users = await usersService.getAllUsers();
    const index = users.findIndex((u) => u.email === req.user.email);

    if (index != -1) {
      const isAllowed = bcrypt.compareSync(
        req.user.password,
        users[index].password
      );
      if (!isAllowed) {
        winston.error("jwt --> las contraseñas no coinciden");
        res.status(403).json("FORBIDDEN");
      } else {
        next();
      }
    } else {
      winston.error("jwt --> usuario no encontrado");
      throw new Error("NOT_FOUND");
    }
  } catch (error) {
    winston.error(`Error --> ${error}`);
  }
}

export async function authenticate(req, res, next) {
  console.log(req.body);
  try {
    const email = req.body.email;
    const password = req.body.password;

    const users = await usersService.getAllUsers();
    const index = users.findIndex((u) => u.email === email);

    const isAllowed = bcrypt.compareSync(password, users[index].password);
    if (!isAllowed) {
      winston.log("warn", `Authenticate --> las contraseñas no coinciden`);
      res.status(401).json("UNAUTHORIZED");
    } else {
      const token = generateAuthToken(email, password);
      res.json(token);
    }
  } catch (error) {
    winston.log("error", `Authenticate --> ${error}`);
    next(error);
  }
}
