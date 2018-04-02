'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserGateway = undefined;

var _User = require('../model/User');

var _User2 = _interopRequireDefault(_User);

var _Exception = require('../../express/Exception');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bccrypt = require('bcrypt');

var UserGateway = exports.UserGateway = {
    create: function create(userData) {
        return new Promise(function (resolve, reject) {
            _User2.default.create(userData, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            });
        });
    },

    updateById: function updateById(id, data) {
        return new Promise(function (resolve, reject) {
            _User2.default.findByIdAndUpdate({ '_id': id }, data, function (err, user) {
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
            _User2.default.remove({ '_id': id }, function (err, user) {
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
            _User2.default.findById({ '_id': id }, function (err, user) {
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
    },

    findAllWithKeyword: function findAllWithKeyword(filter, offset, limit, order) {

        return new Promise(function (resolve, reject) {
            _User2.default.find(keyword).skip(offset).limit(limit).sort(order).exec(function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            });
        });
    },

    getUser: function getUser() {
        return new Promise(function (resolve, reject) {
            _User2.default.find(function (err, User) {
                if (err) {
                    reject(err);
                } else {
                    resolve(User);
                }
            });
        });
    },

    getUserById: function getUserById(id) {
        return new Promise(function (resolve, reject) {
            _User2.default.findById({ _id: id }, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve(user);
                    } else {
                        reject(new _Exception.NotFound('User not found'));
                    }
                }
            });
        });
    },

    authenticate: function authenticate(username, password) {
        return new Promise(function (resolve, reject) {
            _User2.default.findOne({ username: username, password: password }, function (err, user) {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        bccrypt.hash(user.password, 10, function (err, hash) {
                            if (err) {
                                reject(err);
                            } else {
                                user.password = hash;
                                console.log(user.password);
                            }
                        });
                        resolve(user);
                    } else {
                        reject(new _Exception.InvalidParams('user not found'));
                    }
                }
            });
        });
    }

};