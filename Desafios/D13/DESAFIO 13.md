COMANDOS: 
PORT=8080 pm2 start  ./src/main.js --name=cluster --watch -i max
PORT=8081 pm2 start  ./src/main.js --name=fork --watch
PORT=8082 pm2 start  ./src/main.js --name=fork2 --watch
