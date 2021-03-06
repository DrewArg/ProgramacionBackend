import knex from "knex";

class MessageArchiveTable {
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
            table.string("userEmail"),
            table.string("msgContent"),
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
      await this.sql
        .insert({ ...message, timestamp: Date.now() })
        .into(this.table);
      return message;
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
