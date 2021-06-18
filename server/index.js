const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database');

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

app.get('/flights', (req, res) => {
  db.getFlights(function (err, data) {
    if (err) {
      console.log('getting err');
      console.log(err);
      res.status(400).end();
    } else if (data === undefined) {
      res.status(404).end();
    } else {
      res.status(200).send(data).end();
    }
  });
});

app.post('/flights', (req, res) => {
  db.saveFlights(req.body, function (err) {
    if (err) {
      console.log('posting error');
      console.log(err);
      res.status(400).end();
    } else {
      res.status(201).end();
    }
  });
});
