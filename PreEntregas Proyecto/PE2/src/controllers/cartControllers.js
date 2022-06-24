import { cartsDao } from "../daos/daoIndex.js";

const cartController = {
  async createCart() {
    try {
      const timestamp = new Date();
      const products = [];
      const cart = {
        timestamp: timestamp,
        products: products,
      };
      const currCart = await cartsDao.saveObject(cart);
      return currCart;
    } catch (error) {
      console.error(
        `Cart controller --> No se pudo crear el carrito. Error: ${error}`
      );
    }
  },

  async cartExist() {
    try {
      const carts = await cartsDao.listAll();
      if (carts.length > 0) {
        return carts[0].id;
      } else {
        return false;
      }
    } catch (error) {
      console.error(
        "Cart controller --> no se pudo verificar si existen carritos. " + error
      );
    }
  },

  async deleteById(id) {
    try {
      await cartsDao.deleteById(id);
      return { ok: "Cart controller --> carrito eliminado correctamente" };
    } catch (e) {
      console.error(
        "Cart controller --> No se pudo borrar el carrito. Error: " + error
      );
    }
  },

  async productsInCart(cartId) {
    try {
      const cart = await cartsDao.listById(cartId);
      return cart.products;
    } catch (error) {
      console.error(
        "Cart controller --> No se pudieron encontrar los productos. " + error
      );
    }
  },

  async deleteProductById(cartId, productId) {
    const cart = cartsDao.listById(cartId);
    const productIndex = cart.products.findIndex((p) => p.id == productId);
    if (productIndex == -1) {
      console.error(`Cart controller --> No se encontró el id del producto. `);
    } else {
      try {
        cart.products.splice(productIndex, 1)[0];
      } catch (error) {
        console.error(
          "Cart controller --> 405: No se pudo eliminar el producto. " + error
        );
      }
    }
  },

  async addProduct(cartId, product) {
    try {
      const cart = await cartsDao.listById(cartId);
      try {
        await cart.products.push(product);
        try {
          await cartsDao.updateObject(cart);
        } catch (error) {
          console.error("Cart controller --> No se pudo acualizar " + error);
        }
      } catch (error) {
        console.error(
          "Cart controller --> No se pudo agregar el producto. " + error
        );
      }
    } catch (error) {
      console.error(
        "Cart controller --> no se pudo listar el carrito por id " + error
      );
    }
  },
};

export default cartController;
