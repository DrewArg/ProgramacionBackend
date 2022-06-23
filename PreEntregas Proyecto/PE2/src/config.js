import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
  fileSystem: {
    path: "./DB",
  },
  mongodb: {
    cnxStr: "srv+mongodb://xxxxxxxxxxxxxxxxxxx",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    serviceAccount: JSON.parse(fs.readFileSync(path.resolve(__dirname,'./DB/coderhouse-backend-62847-firebase-adminsdk-waoh6-a627ff3b1b.json'),'utf-8'))
  },
  PERSISTANCE_MODE: "products-firebase"
};
