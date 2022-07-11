import MongoStore from 'connect-mongo'

const userName = "root";
const password = "EYUU8mmwfh44bZks";

export const sessionConfig = {
  store: MongoStore.create({
    mongoUrl: `mongodb+srv://root:${password}@cluster0.vcbuwku.mongodb.net/coderhouse`,
    mongoOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  })
  ,
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000
  }
}

export const mongoConfig = {
  mongodb: {
    uri: `mongodb+srv://root:${password}@cluster0.vcbuwku.mongodb.net/?retryWrites=true&w=majority`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      authSource: "admin",
      auth: {
        username: userName,
        password: password,
      },
    },
  }
};

export const persistanceMode = {
  products: "products-mongodb",
  messages: "messages-mongodb",
  mockProducts: "mockProducts-memory",
  mockUsers: "mockUsers-memory",
  sessions: "sessions-mongodb"
}