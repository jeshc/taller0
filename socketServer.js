
//npm install socket.io -g
var socketServer = require('socket.io').listen(8082);


socketServer.on('connect', function(socketClient) {
  console.log('Cliente conectado taller 1');
});

// node socketServer.js
