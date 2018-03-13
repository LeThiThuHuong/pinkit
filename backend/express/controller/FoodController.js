import {FoodGateway} from "../../database/gateway/FoodGateway";

export const FoodController = {
    create: (req, res) => {
        FoodGateway.create(req.body).then((food) => {
            res.json({food: food, status: 200, msg: 'successfully' });
        });
    },


    updateById: (req, res) => {
        const {name, steps, category, tags, media, note, ingredient} = req.body;
        FoodGateway.updateById(req.params.foodId, {name, steps, category, tags, media, note, ingredient}).then((food) => {
            res.json({food: food, status: 200, msg: 'successfully!'});
        });
    },


    deleteById: (req, res) => {
        FoodGateway.deleteById(req.params.foodId).then((result) => {
            res.status(200).send('deleted successfully!');
        });
    },


    findById: (req, res) => {
        FoodGateway.findById(req.params.foodId).then((food) => {
            res.json({food: food, status: 200, msg: 'successfully!'});
        })
    },

    getFood: (req, res) => {
        FoodGateway.getFood(req.params.food).then((food) => {
            res.json({food: food, status: 200});
        })
    },

    getFoodById: (req, res) => {
        FoodGateway.getFoodById(req.params.foodId).then((food) => {
            res.json({food: food, status: 200});
        })
    }
}
