const http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-type':'text/plain'});
  response.end('Hello World! in node.js\n');
}).listen(8000);
console.log("We're up and running!");
