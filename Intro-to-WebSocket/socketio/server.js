const server = require('http').createServer();
const io = require('socket.io')(server); //Attaches Socket.IO to a plain Node.JS HTTP server 
let myPort = 8081;

io.on('connection', handleConnection); //define a handler for a connection event with a client.

function handleConnection(socket) {
    socket.emit('welcome'); //emit() means you're sending out an event. 
                            
    socket.on('client message', handleClientMessage); //attach handleClientMessage to a 'client message' event
    socket.on('end', handleEnd); //attach handleEnd an 'end' event

    function handleClientMessage(message) {
        console.log('received: %s', message);
        socket.emit('server message', message); //you can attach additional data in your emitted event by using 
                                                //any number of additional parameters in .emit(), like .emit('ABC event', data1, ...). 
    };

    function handleEnd() {
        console.log('end connection');
        socket.disconnect(0);
    };
}

server.listen(myPort); //ask the HTTP server to listen on port 8081
console.log("Socket.IO listening on port:" + myPort);

