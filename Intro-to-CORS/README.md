# An-Introduction-to-CORS
Example code for the "An Introduction to CORS" blog post on ITP Networks site. 
(Link will be provided once the blog post is published.)

- The proxy folder contains a CORS proxy server example, and the implement-cors folder contains a server + client example for implementing your own CORS policy.

- You will need to have Node.js installed in order to run the examples.

- Instructions for using the examples:
1. Open terminal, cd to the proxy (or implement-cors) folder, and install the library dependences by entering: npm install
2. Run the server by entering: node server.js

- For the implement-cors example, you'll also need to use a local HTTP server to serve the /public subfolder, then open localhost:[port of the HTTP server] in your browser. If you serve it on port 8081, you'll be able to see a success message printed on the canvas. If you serve it on any other port, you'll see a CORS error.