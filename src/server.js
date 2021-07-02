'use strict';

const express = require('express');
const cors = require('cors')
const app = express();

const shopRoutes = require('./routes/shop');
const badRequest = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');

app.use(express.json());
app.use(cors())

app.get('/', (req,res) => res.status(200).json('StoreFront DB'))
app.use(shopRoutes);
app.use('*', badRequest); //404 ==> page not found
app.use(errors); //500 ==> internal server error

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Port ==> ${port}`);
    })
  }
}
