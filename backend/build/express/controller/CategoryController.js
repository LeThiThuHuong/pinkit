'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryController = undefined;

var _CategoryGateway = require('../../database/gateway/CategoryGateway');

var _Exception = require('../../express/Exception');

var CategoryController = exports.CategoryController = {
    create: function create(req, res, next) {
        _CategoryGateway.CategoryGateway.create(req.body).then(function (category) {
            res.json({ category: category, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    updateById: function updateById(req, res, next) {
        var _req$body = req.body,
            name = _req$body.name,
            season = _req$body.season;

        _CategoryGateway.CategoryGateway.updateById(req.params.categoryId, { name: name, season: season }).then(function (category) {
            res.json({ category: category, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    findById: function findById(req, res, next) {
        _CategoryGateway.CategoryGateway.findById(req.params.categoryId).then(function (category) {
            res.json(category);
        }).catch(function (err) {
            return next(err);
        });
    },

    findAllWithKeyword: function findAllWithKeyword(req, res) {
        var filter = req.query.filter || {};
        var offset = Number(req.query.offset || 0);
        var limit = Number(req.query.limit || 10);
        var order = { date_added: -1 };
        _CategoryGateway.CategoryGateway.findAllWithKeyword(filter, offset, limit, order).then(function (category) {
            res.json({ category: category, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    deleleById: function deleleById(req, res, next) {
        _CategoryGateway.CategoryGateway.deleteById(req.params.categoryId).then(function (result) {
            res.status(200).send('deleted sucessfully!');
        }).catch(function (err) {
            return next(err);
        });
    },

    getCategory: function getCategory(req, res, next) {
        _CategoryGateway.CategoryGateway.getCategory(req.params.category).then(function (category) {
            res.json({ category: category, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    },

    getCategoryById: function getCategoryById(req, res, next) {
        _CategoryGateway.CategoryGateway.getCategoryById(req.params.categoryId).then(function (category) {
            res.json({ category: category, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    }

};