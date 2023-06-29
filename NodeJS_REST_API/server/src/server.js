import express from "express";
import { Server as HttpServer } from "http";
import {
  imagesRouter,
  usersRouter,
  productsRouter,
  cartsRouter,
  ordersRouter,
  loginRouter,
  templateRouter,
} from "./routers/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { engine } from "express-handlebars";
import infoRouter from "./routers/InfoRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("handlebars", engine());
app.set("views", "./public/views");
app.set("view engine", "handlebars");

app.use("/api/images", imagesRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/shoppingcartproducts", cartsRouter);
app.use("/api/orders", ordersRouter);
app.use("/login", loginRouter);
app.use("/info", infoRouter);
app.use("/", templateRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    error: 404,
    description: `ruta ${req.url} método ${req.method} no encontrada`,
  });
});

app.use(errorHandler);

const httpServer = new HttpServer(app);

export default httpServer;
