'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FoodGateway = undefined;

var _Food = require('../model/Food');

var _Food2 = _interopRequireDefault(_Food);

var _Exception = require('../../express/Exception');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FoodGateway = exports.FoodGateway = {
    create: function create(createFoodData) {
        return new Promise(function (resolve, reject) {
            _Food2.default.create(createFoodData, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    resolve(food);
                }
            });
        });
    },

    updateById: function updateById(id, data) {
        return new Promise(function (resolve, reject) {
            _Food2.default.findByIdAndUpdate({ '_id': id }, data, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        resolve('Food.NotFound');
                    }
                }
            });
        });
    },

    findById: function findById(id) {
        return new Promise(function (resolve, reject) {
            _Food2.default.findById({ '_id': id }, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        resolve('Food.NotFound');
                    }
                }
            });
        });
    },

    findAllWithKeyword: function findAllWithKeyword(filter, offset, limit, order) {
        return new Promise(function (resolve, reject) {
            _Food2.default.find(filter).skip(offset).limit(limit).sort(order).exec(function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        reject(new _Exception.NotFound('Food not found'));
                    }
                }
            });
        });
    },

    deleteById: function deleteById(id) {
        return new Promise(function (resolve, reject) {
            _Food2.default.remove({ '_id': id }, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve('delete completely');
                    } else {
                        resolve('Food.NotFound');
                    }
                }
            });
        });
    },

    getFood: function getFood(id) {
        return new Promise(function (resolve, reject) {
            _Food2.default.find({ 'food': food }, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    resolve(food);
                }
            });
        });
    },

    getFoodById: function getFoodById(id) {
        return new Promise(function (resolve, reject) {
            _Food2.default.findById({ '_id': id }, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        resolve('Food.NotFound');
                    }
                }
            });
        });
    }
};