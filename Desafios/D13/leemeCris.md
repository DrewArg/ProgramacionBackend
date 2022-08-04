Buenas cris! como va? 

Para poder correr NginX correctamente con el front en react creé primero un production build, para ello hice:

En el lado del cliente:
npm run build

Luego, con el build creado, fui a la carpeta raíz (ej: C/) y cree una carpeta "www" porque no existía antes. Allí dentro, creé una carpeta "react-app" y pegué el contenido del production build creado.

En el archivo nginx.config pegué el contenido de "nginxNoCluster.config", guardé y luego ejecuté nginx desde la terminal de bash parado en la carpeta contenedora del .exe (ejecutando el comando "./nginx.exe"). En el navegador poniendo la ruta "localhost" aparece la app de react, entonces funciona correctamente.

La configuración de los clusters y el fork están bien. Si corro los comandos estos: 

PORT=8080 pm2 start  ./src/main.js --name=cluster --watch -i max
PORT=8081 pm2 start  ./src/main.js --name=fork --watch
PORT=8082 pm2 start  ./src/main.js --name=fork2 --watch

Se ejecutan correctamente. 

Pero lo que no logro es mostrar correctamente la conexion del front de react con el back. Las visatas de productos, mensajes y login, no muestran nada en el build.

No quiero sonar negativo pero no me gustó nada nginx jajajajaja Prefiero usar express directamente..

No se que estoy haciendo mal jaja :/ Podrás guiarme en la dirección correcta?

Gracias de antemano

Saludos!
