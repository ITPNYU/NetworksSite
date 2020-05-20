const express = require('express'); //include the express module
const request = require('request'); //include the request module

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //use res.header() to add the Access-Control-Allow-Origin: * header to all responses
  next();
});

app.get('/', (req, res) => {
  request(
    {url: 'https://joke-api-strict-cors.appspot.com/jokes/random'}, //here you specify the url to the resource (an image, API, etc.) that does not support CORS
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = 3000;
app.listen(PORT, () => console.log(`CORS proxy listening on port ${PORT}`));