import knex from "knex";

class ProductArchiveTable {
  constructor(config, table) {
    this.table = table;
    this.sql = knex(config);
    this._createTable()
  }

  async _createTable() {
    try {
      const exist = await this.sql.schema.hasTable(this.table);
      if (!exist) {
        await this.sql.schema.createTable(this.table, (table) => {
          table.increments("id"),
            table.string("title"),
            table.double("price"),
            table.string("thumbnail");
        });
        console.log(`la tabla ${this.table} ha sido creada!`);
      } else {
        console.log(
          `la tabla ${this.table} ya existe, no se realizaron cambios`
        );
      }
    } catch (error) {
      console.log("falló la operacion: " + error.message);
    }
  }

  async save(product) {
    if (this.table == null) {
      try {
        await this._createTable();
      } catch (error) {
        return {error: error}
      }
    }
    try {
      const prod = await this.sql.insert(product).into(this.table);
      return prod;
    } catch (error) {
      return { error: error };
    }
  }

  async getAll() {
    try {
      const products = await this.sql(this.table).select("*");
      return products;
    } catch (error) {
      return { error: error };
    }
  }

  async getById(product_id) {
    try {
      const product = await this.sql
        .select("*")
        .from(this.table)
        .where({ id: product_id });
      if (product) {
        return product;
      } else {
        return { error: "el producto no existe en el sistema" };
      }
    } catch (error) {
      return { error: error };
    }
  }

  async deleteById(product_id) {
    try {
      await this.sql.delete().from(this.table).where({ id: product_id });
    } catch (error) {
      return { error: error };
    }
  }

  async deleteAll() {
    try {
      await this.sql.delete().from(this.table);
    } catch (error) {
      return { error: error };
    }
  }

  async generateId() {
    return parseInt(`${Date.now()}`);
  }

  async update(product_id, productData) {
    try {
      const replace = await this.sql
        .update(productData)
        .from(this.table)
        .where({ id: product_id });
      return replace;
    } catch (error) {
      return { error: error };
    }
  }

  async close() {
    this.sql.destroy();
  }
}

export default ProductArchiveTable;
