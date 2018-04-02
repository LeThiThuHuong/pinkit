'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserController = undefined;

var _UserGateway = require('../../database/gateway/UserGateway');

var _Exception = require('../Exception');

var UserController = exports.UserController = {
    create: function create(req, res, next) {
        _UserGateway.UserGateway.create(req.body).then(function (user) {
            res.json({ user: user, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    updateById: function updateById(req, res, next) {
        var _req$body = req.body,
            id = _req$body.id,
            username = _req$body.username,
            age = _req$body.age,
            _req$body$name = _req$body.name,
            firstname = _req$body$name.firstname,
            lastname = _req$body$name.lastname,
            gender = _req$body.gender,
            email = _req$body.email,
            password = _req$body.password;

        _UserGateway.UserGateway.updateById(req.params.userId, { id: id, username: username, age: age, name: { firstname: firstname, lastname: lastname }, gender: gender, email: email, password: password }).then(function (user) {
            res.json({ user: user, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    findById: function findById(req, res, next) {
        _UserGateway.UserGateway.findById(req.params.userId).then(function (user) {
            res.json({ user: user, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    findAllWithKeyword: function findAllWithKeyword(req, res, next) {
        var filter = req.query.keyword || {};
        var offset = Number(req.query.offset || 0);
        var limit = Number(req.query.limit || 10);
        var order = { date_added: -1 };
        _UserGateway.UserGateway.findAllWithKeyword(filter, offset, limit, order).then(function (user) {
            res.json({ user: user, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    deleteById: function deleteById(req, res, next) {
        _UserGateway.UserGateway.deleteById(req.params.userId).then(function (user) {
            res.status(200).send('deleted successfully!');
        }).catch(function (err) {
            return next(err);
        });
    },

    getUser: function getUser(req, res, next) {
        _UserGateway.UserGateway.getUser().then(function (user) {
            res.json({ user: user, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    },

    getUserById: function getUserById(req, res, next) {
        _UserGateway.UserGateway.getUserById(req.params.userId).then(function (user) {
            res.json({ user: user, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    },

    authenticate: function authenticate(req, res, next) {
        var _req$body2 = req.body,
            username = _req$body2.username,
            password = _req$body2.password;

        _UserGateway.UserGateway.authenticate(username, password).then(function (user) {
            req.session.username = user.username;
            console.log(req.session);
            res.json({ user: username, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    }
};