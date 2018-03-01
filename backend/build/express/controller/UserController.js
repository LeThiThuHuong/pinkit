'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserController = undefined;

var _UserGateway = require('../../database/gateway/UserGateway');

var UserController = exports.UserController = {
    create: function create(req, res) {
        _UserGateway.UserGateway.create(req.body).then(function (user) {
            res.json({ user: user, status: 200, msg: 'successfully!' });
        });
    },

    updateById: function updateById(req, res) {
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

        _UserGateway.UserGateway.updateById(req.params.userId, { id: id, username: username, age: age, name: { firstname: firstname, lastname: lastname }, gender: gender, email: email, password: password }).then(function (userAdmin) {
            res.json({ user: user, status: 200, msg: 'successfully!' });
        });
    },

    findById: function findById(req, res) {
        _UserGateway.UserGateway.findById(req.params.userId).then(function (user) {
            res.json({ userAdmin: userAdmin, status: 200, msg: 'successfully!' });
        });
    },

    deleteById: function deleteById(req, res) {
        _UserGateway.UserGateway.deleteById(req.params.userId).then(function (user) {
            res.status(200).send('deleted successfully!');
        });
    }
};