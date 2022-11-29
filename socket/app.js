const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);



//----------------------------------

app.get('/', (req, res) => {
    res.send("Hi, from socket server")
  });


io.on('connection', (socket) => {
    console.log('User Socket Connected');
    socket.on("disconnect", () => console.log(`${socket.id} User disconnected.`));



});

server.listen(8080, () => {
    console.log('Socket Server Is Listening: 8080');
});
