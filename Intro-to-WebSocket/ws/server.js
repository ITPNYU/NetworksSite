const WebSocket = require('ws');

let myPort = 8081;
const wss = new WebSocket.Server({ port: myPort });

console.log("WebSocket server listening on port:" + myPort);

wss.on('connection', handleConnection);

function handleConnection(ws) {
    ws.on('message', handleMessage);

    function handleMessage(message) {
        console.log('received: %s', message);
        ws.send(message);
    };
}

