'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserAdminGateway = undefined;

var _UserAdmin = require('../model/UserAdmin');

var _UserAdmin2 = _interopRequireDefault(_UserAdmin);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserAdminGateway = exports.UserAdminGateway = {
    create: function create(createUserAdminData) {
        return new Promise(function (resolve, reject) {
            _UserAdmin2.default.create(createUserAdminData, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                };
            });
        });
    },

    update: function update(id, data) {
        return new Promise(function (resolve, reject) {
            _UserAdmin2.default.update({ id: id, username: username, password: password }, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        user.update({
                            id: id,
                            username: username,
                            password: password
                        });
                        resolve('updated completely');
                    } else {
                        resolve('no date updated');
                    }
                }
            });
        });
    },

    deleteById: function deleteById(id) {
        return new Promise(function (resolve, reject) {
            _UserAdmin2.default.delete(id, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve('delete successfully');
                    } else {
                        resolve('no data to delete');
                    }
                }
            });
        });
    },

    findById: function findById(id, data) {
        return new Promise(function (resolve, reject) {
            _UserAdmin2.default.findById(id, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve(user);
                    } else {
                        resolve({ error: 'user not found' });
                    }
                }
            });
        });
    }

};