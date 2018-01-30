'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var vegetableRoutes = require('./lib/routes/vegetable.js');

var server;

module.exports = {
    start: function start(callback) {
        server = express();

        server.use(bodyParser.text());
        server.get('/vegetable', vegetableRoutes.get);
        server.delete('/vegetable/:name', vegetableRoutes.delete);
        server.post('/vegetable', vegetableRoutes.post);

        server.listen(3000, callback);
    }
};
