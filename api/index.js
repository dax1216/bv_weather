require('dotenv').config();

const serverless = require('serverless-http');
const express = require('express')
const app = express()
const request = require("request");

const accuweatherUrl = process.env.ACCUWEATHER_API_URL;
const accuweatherKey = process.env.ACCUWEATHER_KEY;

app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Weather App Yo!')
})

app.post('/location/zip', function (req, res) {
  const zip = req.body.zip;

  if (zip == '') {
    res.status(400).json({ error: '"Zip" is required' });
  }

  request.get(`${accuweatherUrl}locations/v1/postalcodes/us/search?apikey=${accuweatherKey}&q=${zip}`, (error, response, body) => {
    if(error) {
      res.end(JSON.stringify(error));
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(body);
  });
})

app.post('/weather', function (req, res) {
  const locationKey = req.body.locationKey;
  if (locationKey == '') {
    res.status(locationKey).json({ error: '"locationKey" is required' });
  }

  request.get(`${accuweatherUrl}currentconditions/v1/${locationKey}/?apikey=${accuweatherKey}`, (error, response, body) => {
    if(error) {
      res.end(JSON.stringify(error));
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(body);
  });
})

module.exports.handler = serverless(app);
