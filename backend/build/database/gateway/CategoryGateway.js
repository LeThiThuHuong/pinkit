'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryGateway = undefined;

var _Category = require('../model/Category');

var _Category2 = _interopRequireDefault(_Category);

var _url = require('url');

var _util = require('util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryGateway = exports.CategoryGateway = {
    create: function create(createCategoryData) {
        return new Promise(function (resolve, reject) {
            _Category2.default.create(createCategoryData, function (err, Category) {
                if (err) {
                    reject(err);
                } else {
                    resolve(Category);
                }
            });
        });
    },

    updateById: function updateById(id, data) {
        return new Promise(function (resolve, reject) {
            _Category2.default.findByIdAndUpdate({ '_id': id }, data, function (err, category) {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        resolve({});
                    }
                }
            });
        });
    },

    findById: function findById(id) {
        return new Promise(function (resolve, reject) {
            _Category2.default.findById({ '_id': id }, function (err, category) {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        resolve('data not found!');
                    }
                }
            });
        });
    },

    deleteById: function deleteById(id) {
        return new Promise(function (resolve, reject) {
            _Category2.default.remove({ '_id': id }, function (err, category) {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve('deleted completely!');
                    } else {
                        resolve('no data to delete');
                    }
                }
            });
        });
    }
};