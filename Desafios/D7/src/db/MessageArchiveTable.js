import knex from "knex";

class MessageArchiveTable {
  constructor(table, config) {
    this.table = table;
    this.sql = knex(config);
  }

  async createTable() {
    try {
      const exist = await this.sql.schema.hasTable("products");
      if (!exist) {
        await this.sql.schema.createTable(this.table, (table) => {
          table.increments("id"),
            table.string("user"),
            table.string("message"),
            table.string("timestamp");
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

  async save(message) {
    try {
      const msg = await this.sql
        .insert({ ...message, timestamp: Date.now() })
        .into(this.table);
      return msg;
    } catch (error) {
      return { error: error };
    }
  }

  async getAll() {
    try {
      const messages = await this.sql(this.table).select("*");
      return messages;
    } catch (error) {
      return { error: error };
    }
  }

  async getById(message_id) {
    try {
      const message = await this.sql
        .select("*")
        .from(this.table)
        .where({ id: message_id });
      if (message) {
        return message;
      } else {
        return { error: "el mensaje no existe en el sistema" };
      }
    } catch (error) {
      return { error: error };
    }
  }

  async deleteById(message_id) {
    try {
      await this.sql.delete().from(this.table).where({ id: message_id });
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

  async update(message_id, messageData) {
    try {
      const replace = await this.sql
        .update(messageData)
        .from(this.table)
        .where({ id: message_id });
      return replace;
    } catch (error) {
      return { error: error };
    }
  }

  async close() {
    this.sql.destroy();
  }
}

export default MessageArchiveTable;
