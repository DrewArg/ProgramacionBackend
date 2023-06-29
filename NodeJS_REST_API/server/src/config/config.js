import dotenv from "dotenv";
dotenv.config();

export const adminEthereal = "lesly65@ethereal.email"
export const adminEtherealPass = process.env.ADMIN_PASS

export const ADMIN_EMAIL = "admin@admin.com";

export const PORT = process.env.PORT;
export const DB_NAME = process.env.DB_NAME;
export const PERSISTANCE = process.env.PERSISTANCE;

export const SECRET = process.env.JWT_TOKEN;

let mongoConfig;
const username = process.env.DB_USER;
const password = process.env.DB_SHH;
if (PERSISTANCE == "mongoAtlas") {
  mongoConfig = {
    mongodb: {
      url: `mongodb+srv://${username}:${password}@cluster0.wc8fbuf.mongodb.net/?retryWrites=true&w=majority`,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: "admin",
        auth: {
          username: username,
          password: password,
        },
      },
    },
  };
} else {
  mongoConfig = {
    mongodb: {
      url: `mongodb://localhost:27017`,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: "admin",
      },
    },
  };
}

export { mongoConfig };
