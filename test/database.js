'use strict';

var expect = require('chai').expect;
var request = require('request');

describe('vegetable api - database', function() {
    var baseUrl = 'http://localhost:3000';
    var server = require('../server.js');
    var vegetables = require('../lib/vegetables.js');

    before(function(done) {
        server.start(done);
    });

    afterEach(function() {
        vegetables.length = 0;
    });

    describe('when POST /vegetable is requested', function() {
        it('should have the posted vegetable in the vegetables database', function() {

        });
    });

    describe('when GET /vegetable is requested', function() {
        it('should respond with all the vegetables in the vegetables database', function() {

        });

        it('should respond with all vegetables upperCased if the query parameter \'upperCase\' is \'true\'', function() {

        });
    });

    describe('when DELETE /vegetable/:name is requested', function() {
        it('should respond with 200 and \'Successfully deleted: \' and the vegetable name', function() {

        });
    });
});