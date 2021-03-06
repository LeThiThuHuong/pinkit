'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryGateway = undefined;

var _Category = require('../model/Category');

var _Category2 = _interopRequireDefault(_Category);

var _Exception = require('../../express/Exception');

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
                        resolve('Category.NotFound');
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
                        resolve('Category.NotFound');
                    }
                }
            });
        });
    },

    findAllWithKeyword: function findAllWithKeyword(filter, offset, limit, order) {
        return new Promise(function (resolve, reject) {
            _Category2.default.find(filter).skip(offset).limit(limit).sort(order).exec(function (err, category) {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        reject(new _Exception.NotFound('Category not found'));
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
                        resolve('Category.NotFound');
                    }
                }
            });
        });
    },

    getCategory: function getCategory(category) {
        return new Promise(function (resolve, reject) {
            _Category2.default.find({ 'food': food }, function (err, category) {
                if (err) {
                    reject(err);
                } else {
                    resolve(category);
                }
            });
        });
    },

    getCategoryById: function getCategoryById(id) {
        return new Promis(function (resolve, reject) {
            _Category2.default.findById({ '_id': id }, function (err, category) {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        resolve('Category.NotFound');
                    }
                }
            });
        });
    }
};