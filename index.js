'use strict';

let server = require('./src/server.js');
let PORT = process.env.PORT || 3300;

const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://dpg21:niju21@cluster0.dy4zs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(MONGO_URI, options)
  .then(() => server.start(PORT));
