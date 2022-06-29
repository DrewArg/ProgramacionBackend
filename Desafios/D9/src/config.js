const userName = "root";
const password = "EYUU8mmwfh44bZks";

export default {
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
  PRODUCTS_PERSISTANCE_MODE: "products-mongodb",
  MESSAGES_PERSISTANCE_MODE: "messages-mongodb",
  MOCKPRODUCTS_PERSISTANCE_MODE: "mockProducts-memory",
};
