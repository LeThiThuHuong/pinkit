'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryController = undefined;

var _CategoryGateway = require('../../database/gateway/CategoryGateway');

var CategoryController = exports.CategoryController = {
    create: function create(req, res) {
        _CategoryGateway.CategoryGateway.create(req.body).then(function (category) {
            res.json({ category: category, status: 200, msg: 'successfully!' });
        });
    },

    updateById: function updateById(req, res) {
        var _req$body = req.body,
            name = _req$body.name,
            season = _req$body.season;

        _CategoryGateway.CategoryGateway.updateById(req.params.categoryId, { name: name, season: season }).then(function (category) {
            res.json({ category: category, status: 200, msg: 'successfully!' });
        });
    },

    findById: function findById(req, res) {
        _CategoryGateway.CategoryGateway.findById(req.params.categoryId).then(function (category) {
            res.json(category);
        });
    },

    deleleById: function deleleById(req, res) {
        _CategoryGateway.CategoryGateway.deleteById(req.params.categoryId).then(function (result) {
            res.status(200).send('deleted sucessfully!');
        });
    }
};