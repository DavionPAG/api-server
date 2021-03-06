'use strict';

let server = require('./src/server.js');
let PORT = process.env.PORT || 3300;

const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/lab-04-db';
const options = { useNewUrlParser: true, useUnifiedTopology: true }; 

mongoose.connect(MONGO_URI, options)
    .then(() => server.start(PORT));
