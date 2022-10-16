const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

// Esta es la forma de usar un middleware en nuestra aplicacion express:
app.use(morgan('dev'));
// En este caso incluimos el middleware morgan

app.use(express.static(__dirname + '/public'));
// Con la linea anterior hacemos que nuestro servidor sirva archivos estaticos, html en esta aplicación

app.use((req, res, next) => {
//   console.log(req.headers); Esta líne ya no seria necesaria porque morgan haria su trabajo
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});