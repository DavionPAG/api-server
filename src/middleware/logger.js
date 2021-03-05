'use strict';

module.exports = (req, res, next) => {
    console.log('req info ==>', req.path, req.method)
    next();
}