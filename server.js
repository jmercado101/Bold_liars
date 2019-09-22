const express = require('express');
const app = express();
const port = 3000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);



app.get('/', (req, res) => res.send('Welcome to the Server'));

io.on('connection', socket => {
    console.log('a user connected');
});

http.listen(port, () => {
    console.log("listening on *:3000")
});
