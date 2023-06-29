import bcrypt from "bcryptjs";
import UsersService from "../service/UsersService.js";
import { generateAuthToken } from "../middlewares/jwt.js";
import { winston } from "./loggersControllers.js";
import {
  sendNewRegisterEtherealToAdmin,
  sendNewRegisterEtherealToUser,
} from "../messaging/nodeMailer.js";

export default class UsersControllers {
  #usersService;
  /**
   * @param {UsersService} usersService
   */

  constructor(usersService) {
    this.#usersService = usersService;
  }

  getById = async (req, res, next) => {
    try {
      const usr = await this.#usersService.getById(req.params.id);
      res.json(id);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  getDbUsers = async () => {
    try {
      const users = await this.#usersService.getAllUsers();
      return users;
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const users = await this.#usersService.getAllUsers();
      res.json(users);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  isUniqueUsername = async (email) => {
    const users = await this.#usersService.getAllUsers();
    const user = users.find((u) => u.email == email);
    if (!user) {
      return true;
    } else {
      return false;
    }
  };

  saveUser = async (req, res, next) => {
    try {
      const unique = await this.isUniqueUsername(req.body.email)
      if (unique) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const userId = await this.#usersService.saveUser(req.body);
        const user = await this.#usersService.getById(userId);
        await sendNewRegisterEtherealToAdmin(user);
        await sendNewRegisterEtherealToUser(user);
        res.status(201).json(userId);
      } else {
        winston.error("user controllers --> el usuario ya existe");
        throw new Error("BAD_REQUEST");
      }
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  updateUser = async (req, res, next) => {
    try {
      const updatedUser = await this.#usersService.updateUser(
        req.params.id,
        req.body
      );
      res.json(updatedUser);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };

  deleteUser = async (req, res, next) => {
    try {
      const deletedUser = await this.#usersService.deleteUser(req.params.id);
      res.json(deletedUser);
    } catch (error) {
      winston.error(error);
      next(error);
    }
  };
}
