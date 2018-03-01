'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserGateway = undefined;

var _User = require('../model/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserGateway = exports.UserGateway = {
    create: function create(createUserData) {
        return new Promise(function (resolve, reject) {
            UserAdmin.create(createUserData, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                };
            });
        });
    },

    updateById: function updateById(id, data) {
        return new Promise(function (resolve, reject) {
            UserAdmin.findByIdAndUpdate({ '_id': id }, data, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve('updated completely');
                    } else {
                        resolve('User.NotFound');
                    }
                }
            });
        });
    },

    deleteById: function deleteById(id) {
        return new Promise(function (resolve, reject) {
            UserAdmin.remove({ '_id': id }, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve('delete successfully');
                    } else {
                        resolve('User.NotFound');
                    }
                }
            });
        });
    },

    findById: function findById(id, data) {
        return new Promise(function (resolve, reject) {
            UserAdmin.findById({ '_id': id }, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve(user);
                    } else {
                        resolve('User.NotFound');
                    }
                }
            });
        });
    }

};