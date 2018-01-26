"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FoodController = undefined;

var _FoodGateway = require("../../database/gateway/FoodGateway");

var FoodController = exports.FoodController = {
    create: function create(req, res) {
        _FoodGateway.FoodGateway.create(req.body).then(function (food) {
            res.json(food);
        });
    },

    updateById: function updateById(req, res) {
        _FoodGateway.FoodGateway.updateById(req.body.id).then(function (food) {
            res.json(food);
        });
    },

    deleteById: function deleteById(req, res) {
        _FoodGateway.FoodGateway.deleteById(req.body.id).then(function (result) {
            res('deleted successfully!');
        });
    },

    findById: function findById(req, res) {
        _FoodGateway.FoodGateway.findById(req.body.id).then(function (food) {
            res.json(food);
        });
    }
};