const express = require('express'); //include the express module
const cors = require('cors'); //include the cors module
const app = express();

var corsOptions = { // define a CORS Options object
  origin: 'http://localhost:8081',  // specify what origins are allowed to access the server
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));

app.get('/hi', (req, res) => {

  res.json({ msg: "Hi, you accessed this server from http://localhost:8081!" }); // send a simple response json when a request is made to "/hi"

});

const PORT = 3000;
app.listen(PORT, () => console.log('CORS-enabled server is listening on port 3000'));