import {productsDao} from "../daos/daoIndex.js";

const productController = {
  async getById(id) {
    try {
      const prod = await productsDao.listById(id);
      return prod;
    } catch (e) {
      return { oops: "no se pudo obtener el producto. Error: " + e };
    }
  },

  async updateProduct(req, res) {
    try {
      const prod = await productsDao.updateObject(req);
      res.json(prod);
    } catch (e) {
      return { error: e };
    }
  },

  deleteById(req, res) {
    const id = req.params.id;
    try {
      res.send(productsDao.deleteById(id));
    } catch (e) {
      res.send({ oops: "No se pudo borrar el producto. Error: " + error });
    }
  },

  getAllProducts: () => {
    return productsDao.listAll();
  },

  saveProduct: (req, res) => {
    try {
      res.status(201).json(productsDao.saveObject(req.body));
    } catch (error) {
      res.send({ oops: "No se pudo guardar el producto. Error: " + error });
    }
  },
};

export default productController;
