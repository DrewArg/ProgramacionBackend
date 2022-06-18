import ArchiveContainer from "../../container/ArchiveContainer.js";

class ProductsDaoArchive extends ArchiveContainer {
  constructor(path) {
    super(`${path}/products.json`);
  }
}

export default ProductsDaoArchive;
