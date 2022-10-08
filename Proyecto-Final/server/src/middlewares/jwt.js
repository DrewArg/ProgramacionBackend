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
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"] || "";

  if (!authHeader) {
    winston.error("jwt --> el usuario no está autenticado");
    throw new Error("UNAUNTHENTICATED");
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    winston.error("jwt --> el usuario no está autenticado");
    throw new Error("UNAUNTHENTICATED");
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;

    const users = await usersService.getAllUsers();
    const index = users.findIndex((u) => u.email === req.user.email);

    if (index != -1) {
      if (users[index].password !== req.user.password) {
        winston.error("jwt --> las contraseñas no coinciden");
        throw new Error("FORBIDDEN");
      }
    } else {
      winston.error("jwt --> usuario no encontrado");
      throw new Error("NOT_FOUND");
    }
  } catch (error) {
    winston.error(`Error --> ${error}`);
    throw new Error("FORBIDDEN");
  }

  next();
}

export async function authenticate(req, res, next) {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const users = await usersService.getAllUsers();
    const index = users.findIndex((u) => u.email === email);

    const isAllowed = bcrypt.compareSync(password, users[index].password);
    if (!isAllowed) {
      winston.log("warn", `Authenticate --> las contraseñas no coinciden`);
      throw new Error("UNAUNTHENTICATED");
    } else {
      const token = generateAuthToken(email, password);
      res.json(token);
    }
  } catch (error) {
    console.log(error);
    winston.log("error", `Authenticate --> ${error}`);
  }
}
