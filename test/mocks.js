'use strict';

var expect = require('chai').expect;
var mockery = require('mockery');
var sinon = require('sinon');
var request = require('request');

describe('vegetable api - mocks', function() {
    var databaseMock;
    var baseUrl = 'http://localhost:3000';

    before(function(done) {
        mockery.enable({useCleanCache: true, warnOnUnregistered: false});
        databaseMock = {
            getVegetables: sinon.stub(),
            addVegetable: sinon.stub(),
            deleteVegetable: sinon.stub()
        };
        mockery.registerMock('../database.js', databaseMock);

        var server = require('../server.js');
        server.start(done);
    });

    after(function() {
        mockery.deregisterAll();
        mockery.disable();
    });

    afterEach(function() {
        databaseMock.getVegetables.reset();
        databaseMock.addVegetable.reset();
        databaseMock.deleteVegetable.reset();
    });

    describe('when POST /vegetable is requested', function() {
        it('should respond with a 500 when databaseMock.addVegetable throws', function() {

        });
    });

    describe('when GET /vegetable is requested', function() {
        it('should respond with 200 and all the vegetables', function() {

        });

        it('should respond with a 200 and all vegetables upperCased if the query parameter \'upperCase\' is \'true\'', function() {

        });
    });

    describe('when DELETE /vegetable/:name is requested', function() {
        it('should respond with 500 and if databaseMock.getVegetables throws an error', function() {

        });
    });
});