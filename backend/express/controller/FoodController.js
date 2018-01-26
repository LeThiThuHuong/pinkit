import {FoodGateway} from "../../database/gateway/FoodGateway";

export const FoodController = {
    create: (req, res) => {
        FoodGateway.create(req.body).then((food) => {
            res.json(food);
        });
    },


    updateById: (req, res) => {
        FoodGateway.updateById(req.body.id).then((food) => {
            res.json(food);
        });
    },

    deleteById: (req, res) => {
        FoodGateway.deleteById(req.body.id).then((result) => {
            res('deleted successfully!');
        });
    },


    findById: (req, res) => {
        FoodGateway.findById(req.body.id).then((food) => {
            res.json(food);
        })
    }
}
