const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
   cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST']
   },
});

io.on("connection", (socket) => {
   console.log('user connected:', socket.id);

   socket.on('send_message', (data) => {
      socket.emit('receive_message', data);
   });

   socket.on('disconnect', () => {
      console.log('user disconnected:', socket.id);
   });
});

server.listen(4000, () =>
   console.log("The server is running on port 4000.")
);
// http.listen(4000, () => console.log(`Listening on port: 4000`));


// socket.on('message', ({name, message}) => {
//    io.emit('message', {name, message})
// })