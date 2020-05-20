const express = require('express'); //include the express module
const cors = require('cors'); //include the cors module
const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.get('/hi', (req, res) => {

  res.json({ msg: "Hi, you accessed this server from http://localhost:8081!" });

});

const PORT = 3000;
app.listen(PORT, () => console.log('CORS-enabled server is listening on port 3000'));