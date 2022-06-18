export default {
  fyleSystem: {
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
  firebase: {},
  PERSISTANCE_MODE: "mongodb"
};
