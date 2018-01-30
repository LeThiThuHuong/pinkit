import {IngredientGateway} from '../../database/gateway/IngredientGateway';

export const IngredientController = {
    create: (req, res) => {
        IngredientGateway.create(req.body).then((ingredient) => {
            res.json({ingredient: ingredient, status: 200, msg: 'successfully!'})
        })
    },

    updateById: (req, res) => {
        const {id, name, amount, shop} = req.body;
        IngredientGateway.updateById(req.params.ingredientId, {id, name, amount, shop}).then((ingredient) => {
            res.json({ingredient: ingredient, status: 200, msg: 'successfully!'})
        })
    },

    findById: (req, res) => {
        IngredientGateway.deleteById(req.params.ingredientId).then((ingredient) => {
            res.json({ingredient: ingredient, status: 200, msg: 'successfully!'})
        })
    },

    deleteById: (req, res) => {
        IngredientGateway.deleteById(req.params.ingredientId).then((ingredient) => {
            res.status(200).send('deleted successfully!')
        })
    }
}
