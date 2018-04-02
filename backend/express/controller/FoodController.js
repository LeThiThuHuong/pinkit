import {FoodGateway} from "../../database/gateway/FoodGateway";

export const FoodController = {
    create: (req, res) => {
        FoodGateway.create(req.body).then((food) => {
            res.json({food: food, status: 200, msg: 'successfully' });
        }).catch(err => {
            return next(err);
        })

    },


    updateById: (req, res) => {
        const {name, steps, category, tags, media, note, ingredient} = req.body;
        FoodGateway.updateById(req.params.foodId, {name, steps, category, tags, media, note, ingredient}).then((food) => {
            res.json({food: food, status: 200, msg: 'successfully!'});
        }).catch(err => {
            return next(err);
        })
    },


    deleteById: (req, res) => {
        FoodGateway.deleteById(req.params.foodId).then((result) => {
            res.status(200).send('deleted successfully!');
        }).catch(err => {
            return next(err);
        })
    },


    findById: (req, res) => {
        FoodGateway.findById(req.params.foodId).then((food) => {
            res.json({food: food, status: 200, msg: 'successfully!'});
        }).catch(err => {
            return next(err);
        })
    },


    findAllWithKeyword: (req, res) => {
        const filter = req.query.filter;
        const offset = Number(req.query.offset || 0);
        const limit = Number(req.query.limit || 10);
        const order = {date_added: -1};
        FoodGateway.findAllWithKeyword(filter, offset, limit, order).then((food) => {
            res.json({food: food, status: 200, msg: 'successfully!'});
        }).catch(err => {
            return next(err);
        })
    },


    getFood: (req, res) => {
        FoodGateway.getFood(req.params.food).then((food) => {
            res.json({food: food, status: 200});
        }).catch(err => {
            return next(err);
        })
    },

    getFoodById: (req, res) => {
        FoodGateway.getFoodById(req.params.foodId).then((food) => {
            res.json({food: food, status: 200});
        }).catch(err => {
            return next(err);
        })
    }
}
