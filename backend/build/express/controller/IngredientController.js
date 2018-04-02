'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IngredientController = undefined;

var _IngredientGateway = require('../../database/gateway/IngredientGateway');

var _Ingredient = require('../../database/model/Ingredient');

var _Ingredient2 = _interopRequireDefault(_Ingredient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IngredientController = exports.IngredientController = {
    create: function create(req, res) {
        _IngredientGateway.IngredientGateway.create(req.body).then(function (ingredient) {
            res.json({ ingredient: ingredient, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
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
        }).catch(function (err) {
            return next(err);
        });
    },

    findById: function findById(req, res) {
        _IngredientGateway.IngredientGateway.deleteById(req.params.ingredientId).then(function (ingredient) {
            res.json({ ingredient: ingredient, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    findAllWithKeyword: function findAllWithKeyword(req, res) {
        var filter = req.query.filter || {};
        var offset = Number(req.query.offset || 0);
        var limit = Number(req.query.limit || 10);
        var order = { date_added: -1 };
        IngredientController.findAllWithKeyword(filter, offset, limit, order).then(function (ingredient) {
            res.json({ ingredient: ingreident, status: 200, msg: 'successfully!' });
        }).catch(function (err) {
            return next(err);
        });
    },

    deleteById: function deleteById(req, res) {
        _IngredientGateway.IngredientGateway.deleteById(req.params.ingredientId).then(function (ingredient) {
            res.status(200).send('deleted successfully!');
        }).catch(function (err) {
            return next(err);
        });
    },

    getIngredient: function getIngredient(req, res) {
        _IngredientGateway.IngredientGateway.getIngredient(req.params.ingredientName).then(function (ingredient) {
            res.json({ ingredient: ingredient, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    },

    getIngredientById: function getIngredientById(req, res) {
        _IngredientGateway.IngredientGateway.getIngredientById(req.params.ingredientId).then(function (ingredient) {
            res.json({ ingredient: ingredient, status: 200 });
        }).catch(function (err) {
            return next(err);
        });
    }
};