import bcrypt from 'bcryptjs'
import { mockUsersDao, usersDao } from "../daos/daoIndex.js";

export const userController = {
  async getMockUserData() {
    try {
      const userData = await mockUsersDao.randomUserData();
      return userData;
    } catch (error) {
      console.error(
        "User controller -->  " +
        error
      );
    }
  },

  async getUsers() {
    try {
      const users = await usersDao.listAll()
      return users
    } catch (error) {
      "User controller -->  " +
        error
    }
  },

  async saveUser(user) {
    try {
      const exists = await this.isUniqueUsername(user.username)
      if (exists) {
        const hashPass = await bcrypt.hash(user.password, 10)
        const usr = {
          username: user.username,
          password: hashPass
        }
        return await usersDao.saveObject(usr);
      } else {
        console.log("el usuario ya existe");
      }

    } catch (error) {
      console.error(
        "User controller --> " +
        error
      );
    }
  },

  async getById(id) {
    try {
      const usr = await usersDao.listById(id);
      return usr;
    } catch (e) {
      console.error(
        "User controller --> " +
        error
      );
    }
  },

  async getByUsername(username) {
    try {
      const users = this.getUsers();
      const user = users.find(u => u.username === username)
      return user;
    } catch (error) {
      console.error("User Controller -->  " + error);
    }
  },

  async isUniqueUsername(username) {
    try {
      const users = await this.getUsers();
      const user = users.find(u => u.username === username)
      if (user) {
        return false
      } else {
        return true
      }
    } catch (error) {
      console.error("User Controller --> " + error);
    }
  },

  async updateUser(user) {
    try {
      const usr = await usersDao.updateObject(user);
      return usr;
    } catch (e) {
      console.error(
        "User controller -->  " + e
      );
    }
  },

  async deleteById(id) {
    try {
      await usersDao.deleteById(id);
      return { ok: "User controller --> usuario eliminado correctamente" };
    } catch (e) {
      console.error(
        "User controller --> " + error
      );
    }
  },
};
