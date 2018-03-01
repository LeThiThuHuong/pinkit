'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientGateway = undefined;

var _Ingredient = require('../model/Ingredient');

var _Ingredient2 = _interopRequireDefault(_Ingredient);

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

    updateById: function updateById(id, data) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.findByIdAndUpdate({ '_id': id }, data, function (err, ingredinet) {
                if (err) {
                    reject(err);
                } else {
                    if (ingredinet) {
                        resolve('updated completely');
                    } else {
                        resolve('Ingredient.NotFound');
                    }
                }
            });
        });
    },

    findById: function findById(id) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.findById({ '_id': id }, function (err, ingredient) {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve(ingredient);
                    } else {
                        resolve('Ingredient.NotFound');
                    }
                }
            });
        });
    },

    deleteById: function deleteById(id) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.remove({ '_id': id }, function (err, ingredient) {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve('deleted completely');
                    } else {
                        resolve('Ingredient.NotFound');
                    }
                }
            });
        });
    }
};