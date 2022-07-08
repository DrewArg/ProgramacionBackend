import MemoryContainer from "../containers/MemoryContainer.js";
import {
  createProductData,
  createId,
  createUserData,
} from "../utils/generators.js";

class MockApi extends MemoryContainer {
  constructor() {
    super();
  }

  randomProductData() {
    return createProductData(createId());
  }

  randomUserData() {
    return createUserData();
  }
}

export default MockApi;
