'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientController = undefined;

var _IngredientGateway = require('../../database/gateway/IngredientGateway');

var IngredientController = exports.IngredientController = {
    create: function create(req, res) {
        _IngredientGateway.IngredientGateway.create(req.body).then(function (ingredient) {
            res.json({ ingredient: ingredient, status: 200, msg: 'successfully!' });
        });
    },

    updateById: function updateById(req, res) {
        var _req$body = req.body,
            id = _req$body.id,
            name = _req$body.name,
            amount = _req$body.amount,
            shop = _req$body.shop;

        _IngredientGateway.IngredientGateway.updateById(req.params.ingredientId, { id: id, name: name, amount: amount, shop: shop }).then(function (ingredient) {
            res.json({ ingredient: ingredient, status: 200, msg: 'successfully!' });
        });
    },

    findById: function findById(req, res) {
        _IngredientGateway.IngredientGateway.deleteById(req.params.ingredientId).then(function (ingredient) {
            res.json({ ingredient: ingredient, status: 200, msg: 'successfully!' });
        });
    },

    deleteById: function deleteById(req, res) {
        _IngredientGateway.IngredientGateway.deleteById(req.params.ingredientId).then(function (ingredient) {
            res.status(200).send('deleted successfully!');
        });
    }
};