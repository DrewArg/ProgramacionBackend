import ArchiveContainer from ('../container/ArchiveContainer.js')
const products = new ArchiveContainer('../../DB/products.json');

const productController = {
  
  async getById(req, res) {
    try {
      const prod = await products.getById(req.params.id);
      res.json(prod);
    } catch (e) {
      console.log(e);
      return { error: e };
    }
  },

  updateProduct(req, res) {
    try {
      const prod = await products.update(req);
      res.json(prod);
    } catch (e) {
      return { error: e };
    }
  },

  deleteById(req, res) {
    const id = req.params.id;
    try {
      res.send(products.deleteById(id))
    } catch (e) {
      res.send({oops: "No se pudo borrar el producto. Error: "+ error})
    }
  },

  getAllProducts: () => {
    return products.listAll();
  },

  saveProduct: (req, res) => {
    try {
      res.status(201).json(products.saveObject(req.body));
    } catch (error) {
     res.send({oops: "No se pudo guardar el producto. Error: "+ error})
    }
  },
};

export default productController