import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const userName = "root";
const password = "EYUU8mmwfh44bZks";

export default {
  fileSystem: {
    products: {
      path: path.resolve(__dirname, "./DB/products.json"),
    },
    carts: {
      path: path.resolve(__dirname, "./DB/carts.json"),
    },
    cartId: {
      path: path.resolve(__dirname, "./DB/cartId.json"),

    }
  },
  mongodb: {
    uri: `mongodb+srv://root:${password}@cluster0.vcbuwku.mongodb.net/?retryWrites=true&w=majority`,
    client: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
      auth: {
        username: userName,
        password: password,
      },
    },
  },
  firebase: {
    serviceAccount: JSON.parse(
      fs.readFileSync(
        path.resolve(
          __dirname,
          "./DB/coderhouse-backend-62847-firebase-adminsdk-waoh6-a627ff3b1b.json"
        ),
        "utf-8"
      )
    ),
  },
  PRODUCTS_PERSISTANCE_MODE: "products-mongodb",
  CARTS_PERSISTANCE_MODE:"carts-firebase",
  CARTID_PERSISTANCE_MODE: "cartId-firebase"
};
