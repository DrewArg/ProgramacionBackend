import { sqlClientAdmin as admin } from "../sqlClient.js";

try {
  const exist = await admin.schema.hasTable("products");
  if (!exist) {
    await admin.schema.createTable("products", (table) => {
      table.increments("id"), 
      table.string("title"), 
      table.double("price"),
      table.string("thumbnail");
    });
    console.log("la tabla 'products' ha sido creada!");
  } else {
    console.log("la tabla 'products' ya existe, no se realizaron cambios");
  }
} catch (error) {
  console.log("falló la operacion: " + error.message);
} finally {
  admin.destroy();
}
