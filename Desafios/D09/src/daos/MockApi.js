import MemoryContainer from "../containers/MemoryContainer.js";
import {
  createProduct,
  createId,
  createUserData,
} from "../utils/generators.js";

class MockApi extends MemoryContainer {
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

  randomUserData() {
    return createUserData();
  }
}

export default MockApi;
