'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientGateway = undefined;

var _Ingredient = require('../model/Ingredient');

var _Ingredient2 = _interopRequireDefault(_Ingredient);

var _Exception = require('../../express/Exception');

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

    findAllWithKeyWord: function findAllWithKeyWord(filter, offset, limit, order) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.find(filter).skip(offset).limit(limit).sort(order).exec(function (err, ingredient) {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve(ingredient);
                    } else {
                        reject(new _Exception.NotFound('Ingredient not found'));
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
    },

    getIngredient: function getIngredient(ingredientName) {
        return new Promise(function (resolve, reject) {
            _Ingredient2.default.find({ 'ingredient': ingredient }, function (err, ingredient) {
                if (err) {
                    reject(err);
                } else {
                    resolve(ingredient);
                }
            });
        });
    },

    getIngredientById: function getIngredientById(id) {
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
    }
};