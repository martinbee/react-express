const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
const server = app.listen(port);

console.log(`Express listening on ${port}`);

const io = require('socket.io')(server);

console.log(`Socket listening on ${port}`);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => console.log('user disconnected'));

  socket.on('message', msg => io.emit('message', msg));
});
