'use strict';

module.exports = (err, req, res, next) => {
    res.status(50).json({ status: 50, msg: 'server error'})
}