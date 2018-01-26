"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryController = undefined;

var _CategoryGateway = require("../../database/gateway/CategoryGateway");

var CategoryController = exports.CategoryController = {
    create: function create(req, res) {
        _CategoryGateway.CategoryGateway.create(req.body).then(function (category) {
            res.json(category);
        });
    },

    updateById: function updateById(req, res) {
        _CategoryGateway.CategoryGateway.updateById(req.body.id).then(function (category) {
            res.json(category);
        });
    },

    findById: function findById(req, res) {
        _CategoryGateway.CategoryGateway.findById(req.body.id).then(function (category) {
            res.json(category);
        });
    },

    deleleById: function deleleById(req, res) {
        _CategoryGateway.CategoryGateway.deleleById(req.body.id).then(function (result) {
            res('deleted sucessfully!');
        });
    }
};