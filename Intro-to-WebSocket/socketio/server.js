const server = require('http').createServer();
const io = require('socket.io')(server);
let myPort = 8081;

io.on('connection', handleConnection);

function handleConnection(socket) {
    socket.emit('welcome');
    socket.on('client message', handleClientMessage);
    socket.on('end', handleEnd);

    function handleClientMessage(message) {
        console.log('received: %s', message);
        socket.emit('server message', message);
    };

    function handleEnd() {
        console.log('end connection');
        socket.disconnect(0);
    };
}

server.listen(myPort);
console.log("Socket.IO listening on port:" + myPort);

