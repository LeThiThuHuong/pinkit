'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FoodGateway = undefined;

var _Food = require('../model/Food');

var _Food2 = _interopRequireDefault(_Food);

var _url = require('url');

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
            _Food2.default.update({ id: id }, data, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve('updated completely');
                    } else {
                        resolve('no data to update');
                    }
                }
            });
        });
    },

    findById: function findById(id) {
        return new Promise(function (resolve, reject) {
            _Food2.default.findById({ id: id }, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        resolve('data not found');
                    }
                }
            });
        });
    },

    deleteById: function deleteById(id) {
        return new Promise(function (resolve, reject) {
            _Food2.default.deleteById({ id: id }, function (err, food) {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve('delete completely');
                    } else {
                        resolve('no data to delete');
                    }
                }
            });
        });
    }
};