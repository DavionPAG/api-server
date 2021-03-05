'use strict';

let server = require('./src/server.js');
let PORT = process.env.PORT || 3300;

server.start(PORT);