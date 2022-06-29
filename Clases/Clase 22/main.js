import express from "express";
import cookieParser from "cookie-parser";

const app = express();

const sesiones = {};

app.use(express.json());
app.use(cookieParser("secreto!"));

//buen uso de un middleware. Ver de implementarlo
app.use((req, res, next) => {
  res.contestarTodoBien = () => {
    res.send("TODO BIEN");
  };
  next();
});

app.get("/", (req, res) => {
  res.contestarTodoBien();
});

app.get("/cookies", (req, res) => {
  //   res.json(req.cookies);
  res.json({
    normales: req.cookies,
    firmadas: req.signedCookies,
  });
});

app.get("/info", (req, res) => {
    res.send(sesiones[req.cookies.session_id])
});

app.post("/cookies", (req, res) => {
  const options = {};

  if (req.body.miliSegundosDeExpiracion) {
    options.maxAge = req.body.miliSegundosDeExpiracion;
  }

  if (req.body.seguro) {
    options.signed = true;
  }

  const newSessionId = `${Date.now()}`;
  sesiones[newSessionId] = { nombre: req.body.nombre };

  //   res.cookie("nombre", req.body.nombre || "anonimo", options);

  res.cookie("session_  id", newSessionId, options);

  res.send("dato guardado");
  // res.send('dato guardado')
});

app.delete("/cookies", (req, res) => {
  res.clearCookie(req.query.nombrecookie);
  res.send("borrado");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

const server = app.listen(8080, () => {
  console.log(`escuchando en el puerto ${server.address().port}`);
});
