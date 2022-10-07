import dotenv from "dotenv";
dotenv.config();

export const ADMIN_EMAIL = "admin@admin.com";

export const PORT = process.env.PORT;
export const DB_NAME = process.env.DB_NAME;
export const PERSISTANCE = process.env.PERSISTANCE;

export const SECRET = process.env.JWT_TOKEN;

const username = process.env.DB_USER;
const password = process.env.DB_SHH;

export const mongoConfig = {
  mongodb: {
    // url: `mongodb+srv://${username}:${password}@cluster0.vcbuwku.mongodb.net/?retryWrites=true&w=majority`,
    url: `mongodb://localhost:27017`,
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
