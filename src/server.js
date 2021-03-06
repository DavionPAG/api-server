'use strict';

const express = require('express');
const app = express();

const badRequest = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

const clothesRoutes = require('./routes/clothes');
const foodRoutes = require('./routes/food');

app.use(express.json());
app.use(logger);

app.use(clothesRoutes);
app.use(foodRoutes);

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
