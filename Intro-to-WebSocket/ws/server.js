const WebSocket = require('ws'); // Include the ws.js module by calling require('ws').

let myPort = 8081;
const wss = new WebSocket.Server({ port: myPort }); //create a WebSocket server via new WebSocket.Server({ port:[your port number]}).

console.log("WebSocket server listening on port:" + myPort);

wss.on('connection', handleConnection); //whenever a client connects to the server, the handleConnection function will be called.

function handleConnection(ws) {
    ws.on('message', handleMessage); //when a message from the client is received, the handleMessage function will be called.

    function handleMessage(message) {
        console.log('received: %s', message);
        ws.send(message); //bounce the message back to the client using the .send() method
    };
}

