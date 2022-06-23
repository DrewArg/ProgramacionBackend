import ArchiveContainer from "../../container/ArchiveContainer.js";

class DaoArchive extends ArchiveContainer {
  constructor(path) {
    super(`${path}/products.json`);
  }
}

export default DaoArchive;
