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