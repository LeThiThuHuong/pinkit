'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientGateway = undefined;

var _Ingredient = require('../model/Ingredient');

var _Ingredient2 = _interopRequireDefault(_Ingredient);

var _url = require('url');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IngredientGateway = exports.IngredientGateway = {
    create: function create(createIngredientData) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.create(createIngredientData, function (err, ingredient) {
                if (err) {
                    reject(err);
                } else {
                    resolve(ingredient);
                }
            });
        });
    },

    update: function update(id, data) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.update({ id: id, name: name, amount: amount, shop: shop }, function (err, ingredinet) {
                if (err) {
                    reject(err);
                } else {
                    if (ingredinet) {
                        resolve('updated completely');
                    } else {
                        resolve('no data to update');
                    }
                }
            });
        });
    },

    findById: function findById(id, data) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.findById(id, function (err, ingredient) {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve(ingredient);
                    } else {
                        resolve('data not found');
                    }
                }
            });
        });
    },

    deleteById: function deleteById(id) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.deleteById(id, function (err, ingredient) {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve('deleted completely');
                    } else {
                        resolve('no data to delete');
                    }
                }
            });
        });
    }
};