const express = require('express');
const app = express();
const port = 8000;

const cors = require('cors');

require('./server/config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/person.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
   console.log("Nice to meet you. (shake hand)");
   socket.emit("Welcome", "This has been a complicated hand shake!");

   socket.on("event_from_client", data => {
      socket.broadcast.emit("send_data_to_all_other_clients", data)
   });
});