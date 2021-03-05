'use strict';

const express = require('express');
const app = express();

const badRequest = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

app.use(express.json());
app.use(logger);

app.use('*', badRequest); //404 ==> not found
app.use(errors); //500 ==> internal server 

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`Port ==> ${port}`);
    })
  }
}
