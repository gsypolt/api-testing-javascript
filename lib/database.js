'use strict';

var vegatables = require('./vegetables.js');

module.exports = {
    getVegetables: function getVegetables() {
        return vegatables;
    },
    addVegetable: function addVegetable(vegetable) {
        vegatables.push(vegetable)
    },
    deleteVegetable: function deleteVegetable(vegetable) {
        var index = vegatables.indexOf(vegetable);
        vegatables.splice(index, 1);
    }
};
