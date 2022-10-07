import dotenv from "dotenv";
dotenv.config();

export const ADMIN_EMAIL = "admin@admin.com";

export const PORT = process.env.PORT;
export const DB_NAME = process.env.DB_NAME;
export const PERSISTANCE = process.env.PERSISTANCE;

export const SECRET = process.env.JWT_TOKEN;

let mongoUri;
const username = process.env.DB_USER;
const password = process.env.DB_SHH;
if (PERSISTANCE == "mongoAtlas") {
  mongoUri = `mongodb+srv://${username}:${password}@cluster0.vcbuwku.mongodb.net/?retryWrites=true&w=majority`;
} else {
  mongoUri = `mongodb://localhost:27017`;
}

export const mongoConfig = {
  mongodb: {
    url: mongoUri,
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
