export default class ProductList {
  #productsList;

  constructor() {
    this.#productsList = [];
  }

  addProductToList(productId){
    this.#productsList.push(productId)
  }

  getProductList() {
    return this.#productsList;
  }
}
