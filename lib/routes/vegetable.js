'use strict';

var database = require('../database.js');

module.exports = {
    'get': function get(request, response) {
        var vegetables = database.getVegetables();

        if(request.query.upperCase === 'true') {
            var upperCasedVegetables = vegetables.map(function(vegetable){
                return vegetable.toUpperCase();
            });
            response.send(upperCasedVegetables);
        } else {
            response.send(vegetables);
        }
    },
    delete: function deleteVegetable(request, response) {
        var vegetable = request.params.name;

        database.deleteVegetable(vegetable);

        response.send('Successfully deleted: ' + vegetable);
    },
    post: function post(request, response) {
        var vegetable = request.body;

        database.addVegetable(vegetable);

        response.send('Successfully added: ' + vegetable);
    }
};
