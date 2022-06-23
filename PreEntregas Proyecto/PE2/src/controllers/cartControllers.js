import ArchiveContainer from ('../container/ArchiveContainer.js')
const carts = new ArchiveContainer ('../../DB/carts.json');

const cartController = {

  saveCart: (req, res) => {
    try {
      res.status(201).json(carts.saveObject(req.body));
          } catch (error) {
            res.status(200).send({oops: `No se pudo crear el carrito. Error: ${error}`})
    }
      },

  deleteById:(req,res) =>{
    const cartId = req.params.cartId
    try{
      res.json(carts.deleteById(cartId))
    }catch(e){
      
      res.status(404).send({oops: "No se pudo borrar el carrito. Error " + e})
    }
  },

  productsInCart: async (cartId) => {
    const cart = carts.listById(cartId)
    return cart.products;
  },

  deleteProductById: (req, res) => {
    const productId = req.params.productId;
    const cartId = req.params.cartId;
    const cart = carts.listById(cartId)
    const productIndex = cart.products.findIndex(p => p.id == productId)
    if (productIndex == -1) {
      res.status(404).send({ oops: `Error , no se encontró el id de producto ${productId}` });

    }else{
        try {
          cart.products.splice(productIndex,1)[0]
          res.status(200).send({ok: `El producto ${productId} ha sido eliminado correctamente`})
          
        } catch (error) {
          res.status(405).send({oops: `No se pudo eliminar el producto ${productId}. Error: ${error}`})
        
      }
    }
  },

  addProduct: async (req, res) => {
    const cartId = req.params.id;
    const cart = carts.listById(cartId)
    try {
    await cart.products.push(req.body)
    res.status(201).send({ok: `El producto fue agregado correctamente`})
          } catch (error) {
            res.status(404).send({oops: `No se pudo agregar el producto. Error ${error}`})  
    }
  },
};

export default cartController;
