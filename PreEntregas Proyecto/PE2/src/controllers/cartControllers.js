import ArchiveContainer from ('../container/ArchiveContainer.js')
const carts = new ArchiveContainer ('../../DB/carts.json');

const cartController = {

  saveCart: (req, res) => {
    if (req.method === "POST") {
      res.json(carts.saveObject(req.body));
    }else{
      res.send({oops: "Sólo se puede guardar objetos con el método POST"})
    }
  },

  deleteById:(req,res) =>{
    //old cartById
    const cartId = req.params.cartId
    if(req.method === "DELETE"){
      res.json(carts.deleteById(cartId))
    }else{
      res.send({oops: "Sólo se puede borrar objetos con el método DELETE"})
    }
  },

  productsInCart: async (cartId) => {
    const cart = carts.listById(cartId)
    return cart.products;
  },

  productById: (req, res) => {
    const productId = req.params.productId;
    const cartId = req.params.cartId;
    const cart = carts.listById(cartId)
    const productIndex = cart.products.findIndex(p => p.id == productId)
    if (productIndex == -1) {
      return { oops: `Error , no se encontró el id de producto ${productId}` };
    }else{
      if (req.method === "DELETE") {
cart.products.splice(productIndex,1)[0]
res.send({ok: `El producto ${productId} ha sido eliminado correctamente`})
      }
    }

  },

  addProduct: (req, res) => {
    const cartId = req.params.id;
    const cart = carts.listById(cartId)
    if (req.method === "POST") {
      res.json(cart.products.push(req.body))
    }else{
      res.send({oops: `Solo se puede agregar productos con el método POST`})
    }
  },
};

export default cartController;
