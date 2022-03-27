const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require('socket.io')(server, { cors: true });

io.on("connection", (socket) => {
   socket.on('message', (data) => {
      io.emit('message', data);
      console.log(data);
   });
});

server.listen(4000, () =>
   console.log("The server is running on port 4000.")
);
// http.listen(4000, () => console.log(`Listening on port: 4000`));


// socket.on('message', ({name, message}) => {
//    io.emit('message', {name, message})
// })