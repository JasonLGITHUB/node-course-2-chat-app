const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000; // --------heroku------

var app = express(); // start up server
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath)); // middleware------

// io.sockets.on('connection', function (socket) { // reqular function
//     console.log('A client is connected!');
// });

io.on('connection', (socket)  => {   //ES6
  console.log('New user connected');

  socket.emit('newMessage', {
     from: 'Jason ',
     text: 'See you then.',
     createAt: 123123
   });

   socket.on('createMessage', (message) => {
     console.log('creatMessage', message);
   })

   socket.on('disconnect', (socket) => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

// const express = require('express');
// const path = require('path');
//
// const publicPath = path.join(__dirname, '../public');
//
// var app = express();
//
// app.use(express.static(publicPath));
//
// app.listen(3000, () => {
//   console.log('Server is up on port 300')
// });
