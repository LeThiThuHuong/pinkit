import {IngredientGateway} from '../../database/gateway/IngredientGateway';
import Ingredient from '../../database/model/Ingredient';

export const IngredientController = {
    create: (req, res) => {
        IngredientGateway.create(req.body).then((ingredient) => {
            res.json({ingredient: ingredient, status: 200, msg: 'successfully!'});
        }).catch(err => {
            return next(err);
        })
    },

    updateById: (req, res) => {
        const {id, name, amount, shop} = req.body;
        IngredientGateway.updateById(req.params.ingredientId, {id, name, amount, shop}).then((ingredient) => {
            res.json({ingredient: ingredient, status: 200, msg: 'successfully!'});
        }).catch(err => {
            return next(err);
        })
    },

    findById: (req, res) => {
        IngredientGateway.deleteById(req.params.ingredientId).then((ingredient) => {
            res.json({ingredient: ingredient, status: 200, msg: 'successfully!'});
        }).catch(err => {
            return next(err);
        })
    },

    findAllWithKeyword: (req, res) => {
        const filter = req.query.filter || {};
        const offset = Number(req.query.offset || 0);
        const limit = Number(req.query.limit || 10);
        const order = {date_added: -1};
        IngredientController.findAllWithKeyword(filter, offset, limit, order).then((ingredient) => {
            res.json({ingredient: ingreident, status: 200, msg: 'successfully!'});
        }).catch(err => {
            return next(err);
        })
    },

    deleteById: (req, res) => {
        IngredientGateway.deleteById(req.params.ingredientId).then((ingredient) => {
            res.status(200).send('deleted successfully!')
        }).catch(err => {
            return next(err);
        })
    },

    getIngredient: (req, res) => {
        IngredientGateway.getIngredient(req.params.ingredientName).then((ingredient) => {
            res.json({ingredient: ingredient, status: 200});
        }).catch(err => {
            return next(err);
        })
    },

    getIngredientById: (req, res) => {
        IngredientGateway.getIngredientById(req.params.ingredientId).then((ingredient) => {
            res.json({ingredient: ingredient, status: 200});
        }).catch(err => {
            return next(err);
        })
    }
}
