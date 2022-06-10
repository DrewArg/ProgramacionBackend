import express from 'express';
import dotenv from 'dotenv';

import {Server as HttpServer} from 'http'

import { productRouter, messageRouter } from './src/router/api/apiRouter.js'
import { webRouter } from './src/router/web/webRouter.js';

import socketController from './src/controllers/socketControllers.js'

import { sqlClientUser } from './src/db/sqlClient.js'

const expressApp = express();
const httpServer = new HttpServer(expressApp);
const io = new socketController(httpServer);

import { engine } from 'express-handlebars';

dotenv.config();

expressApp.use(express.json())
expressApp.use(express.urlencoded({ extended: true }))
expressApp.use(express.static('public'))

expressApp.engine('handlebars', engine())
expressApp.set('views', './public/views')
expressApp.set('view engine', 'handlebars')

expressApp.use(webRouter)

//cambiar esto
expressApp.get('/api/products',async (req,res)=>{
  const products = await sqlClientUser.select('*').from('products')
  res.json(products)
})

expressApp.use("/api", productRouter)
expressApp.use("/api", messageRouter)

const PORT = process.env.PORT || 8080;

const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${connectedServer.address().port}`);
});

connectedServer.on("error", (e) => console.log(`Error en servidor ${e}`));
