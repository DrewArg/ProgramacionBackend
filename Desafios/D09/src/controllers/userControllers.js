import { mockUsersDao } from "../daos/daoIndex.js";

const userController = {
  async getMockUserData() {
    try {
      const userData = await mockUsersDao.randomUserData();
      return userData;
    } catch (error) {
      console.error(
        "User controller --> no se pudieron obtener los datos mock del usuario. " +
          error
      );
    }
  },
};

export default userController;
