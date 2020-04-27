
const http = require('http');
const app = require('./app');
const port = process.env.port || 3100;

const server = http.createServer(app);
console.log(`Restfull API - running on ${port} port.`);
server.listen(port);