'use strict';

var expect = require('chai').expect;
var request = require('request');

describe('vegetable api - external-process', function() {
    var baseUrl = 'http://localhost:3000';

    describe('when POST /vegetable is requested', function() {
        it('should respond with a 200 status code and a body with \'Successfully added: \' and the posted vegetable name', function() {

        });
    });

    describe('when GET /vegetable is requested', function() {
        it('should respond with a 200 status code and all the vegetables', function() {

        });

        it('should respond with a 200 status code and all vegetables upperCased if the query parameter \'upperCase\' is \'true\'', function() {

        });
    });

    describe('when DELETE /vegetable/:name is requested', function() {
        it('should respond with a 200 status code and \'Successfully deleted: \' and the deleted vegetable name', function() {

        });
    });
});