# servidor api rest
DATA ON WIRE
(no sirve paginas, solo json)

## imagenes (para usuarios y productos)
# FALTA
- POST /api/images: agrega una nueva imagen al servidor (multer), y devuelve su url pública (express.static) 

## usuarios
- POST /api/users: registra un nuevo usuario

## productos
- GET /api/products: devuelve todos los productos
- GET /api/products/{id}: devuelve un producto segun id
- POST /api/products: crea un producto (solo usuarios registrados, con permisos de admin)
- PUT /api/products/{id}: actualiza un producto segun su id (solo usuarios registrados, con permisos de admin)
- DELETE /api/products/{id}: borra un producto segun su id (solo usuarios registrados, con permisos de admin)

[ el nombre de usuario del admin se puede HARDCODEAR en el archivo config ]

## carritos

# FALTA
- GET /api/shoppingcartproducts: devuelve los productos de un carrito (solo usuarios registrados)
# FALTA
- POST /api/shoppingcartproducts: agrega producto al carrito segun su id (solo usuarios registrados)
# FALTA
- DELETE /api/shoppingcartproducts/{id}: quita un producto de un carrito (solo usuarios registrados)

## ordenes
# FALTA
- POST /api/orders: crea una nueva orden (compra todo el contenido de un carrito y lo vacía, solo usuarios registrados)
# FALTA
- GET /api/orders: devuelve todas las ordenes de un usuario (solo usuarios registrados)

# FALTA
## autenticacion
- POST /login: autentica a un usuario (ok? => JWT)

-------------------------------------------------------

# detalles del negocio:
- para crear entidades, tienen que ser validas en su formato y contenido (usar modelos!).
# FALTA
- para agregar productos al carrito, debe existir el producto (validar regla de negocio!)
- al generar nuevas entidades, utilizar ids alfanumericos al azar (opcion: usar uuid para generar ids únicos)
- al almacenar contraseñas en la BD, guardarlas encriptadas (opcion: usar crypto)

+++

- cuando se realiza una compra (crear orden):
# FALTA
- - se vacía el carrito
# FALTA
- - se notifica al admin de la nueva venta (vía mail)
# FALTA
- - se notifica al usuario del nuevo pedido (vía mail)

[ el mail del admin se puede hardcodear en el archivo config ]

-------------------------------------------------------

# caracteristicas de las entidades para persistir

## usuarios
- id
- email (usuario para login)
- password (contraseña para login)
- name (nombre)
- lastname (apellido)
- phone (número telefónico)
- image (url de la foto de perfil)

## productos
- id
- name
- description
- price
- image (url de la foto del producto)
  
## carritos
- id (opcion: usar el mismo del cliente al que pertenece)
- productos y sus cantidades

ejemplo:
{
 id: 1,
 prods: [ { idProd: 1, cant: 2 }, { idProd: 2, cant: 5} ]
}

ejemplo 2:
{
 id: 1,
 prods: [
  { 
    prod: {
      id,
      name,
      description,
      price,
      image,
    },
    cant: 2
  },
  { 
    prod: {
      id,
      name,
      description,
      price,
      image,
    },
    cant: 1
  }
 ]
}

## ordenes
{
  id: 1,
  fecha: (timestamp)
  idCliente: 1,
  prods: [ 
    { 
    prod: {
      id,
      name,
      description,
      price,
      image,
    },
    cant: 2
  },
  { 
    prod: {
      id,
      name,
      description,
      price,
      image,
    },
    cant: 1
  }
 ],
}

# FALTA
## mensajes
- email
- fecha
- texto

todo esto se persiste en MongoDB Local (dev) / Mongo Atlas (prod)

----------------------------------------------------------
# FALTA
# chat via sockets:

- envío de mensajes
- consulta de mensajes

[ esto se saca directamente del proyecto de los desafíos semanales ]

----------------------------------------------------------
# FALTA
# ruta de info del servidor
- renderizar usando algun motor de plantillas

----------------------------------------------------------
# FALTA
# despliegue en Heroku
- a tener en cuenta, en heroku no se cargan los .env, sino que las variables de entorno se cargan desde la configuracion del proyecto, desde el sitio de heroku.

----------------------------------------------------------
# FALTA
# observaciones

la carga de las imagenes se hará exclusivamente ANTES de la carga del usuario/producto a través de la ruta correspondiente (/api/images). operatoria:
- en una 1ra peticion cargar la foto (devuelve la url), y en una 2da crear la entidad, incluyendo la url obtenida

----------------------------------------------------------
# lo NO hace falta (pero si quieren pueden incluir)
----------------------------------------------------------

- front-end. siempre y cuando sea un desarrollo separado,
en una carpeta aparte, en un servidor aparte.
- documentacion, no es necesario.
- tests automatizados, no es necesario.

