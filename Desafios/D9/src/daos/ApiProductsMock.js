import MemoryContainer from "../containers/MemoryContainer.js";
import { createProduct } from "../utils/productGenerator.js";
import { createId } from "../utils/idGenerator.js";

class ApiProductsMock extends MemoryContainer {
  constructor() {
    super();
  }

  randomProduct(amount = 5) {
    const newProducts = [];

    for (let i = 0; i < amount; i++) {
      const product = createProduct(createId());
      const saved = this.saveObject(product);
      newProducts.push(saved);
    }
    return newProducts;
  }
}

export default ApiProductsMock;
