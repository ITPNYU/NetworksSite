# An-Introduction-to-WebSocket
Example code for the "An Introduction to WebSocket" blog post on ITP Networks site. (Link will be provided once the blog post is published.)

- websocket-client.html is a simple WebSocket client example that connects to an echo WebSocket server on websocket.org.
- You will need to have Node.js installed in order to run the ws.js and Socket.IO examples.
- The ws folder contains server and client examples of using ws.js to make WebSocket connections, and The socketio folder contains server and client examples of using Socket.IO to make WebSocket connections.
- Instructions for using the ws.js and Socket.IO examples:
1. Open terminal, cd to the ws (or socketio) folder, and install the library dependences by entering: npm install
2. Run the server by entering: node server.js
3. Open client.html in your browser and check the console logs.