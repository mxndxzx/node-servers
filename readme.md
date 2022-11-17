# Node JS
Node JS es una parte fundamental en cualquier aplicación o página web que contenga una parte de backend. Con Node se pueden hostear servidores locales para tener una previsualización real de nuestro proyecto, o bien incluir un host remoto para levantar la aplicación en todo internet.

## Servidores
Node permite crear servidores `HTTP` con el siguiente script `server.js`:
```javascript
const http = require('http');
const host = '127.0.0.1';
const port = 3000

const server = http.createServer((request,response) => {
    response.writeHead(200, {"Content-Type" : "text/plane"});
    response.write("Server is working!");
    response.end();
});

server.listen(port,host, () => {
    console.log('Server working on', host, port);
});
```

Para ejecutarlo, escribimos en `bash`:
```bash
node script.js
```

Y ya podemos entrar al host y puertos definidos en el archivo