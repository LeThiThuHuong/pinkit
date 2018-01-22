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
            _Category2.default.create(createCategoryData, function (err, category) {
                if (err) {
                    reject(err);
                } else {
                    resolve(category);
                }
            });
        });
    },

    update: function update(id, data) {
        return new Promise(function (resolve, reject) {
            _Category2.default.update({ id: id, name: name, season: season, imageDemo: imageDemo, stories: stories }, function (err, category) {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve('updated completely!');
                    } else {
                        resolve('no data to update');
                    }
                }
            });
        });
    },

    findById: function findById(id, data) {
        return new Promise(function (resolve, reject) {
            _Category2.default.findById(id, function (err, category) {
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
            _Category2.default.delete(id, function (err, category) {
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