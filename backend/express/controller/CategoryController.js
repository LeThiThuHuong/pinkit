import {CategoryGateway} from "../../database/gateway/CategoryGateway";

export const CategoryController = {
    create: (req, res) => {
        CategoryGateway.create(req.body).then((category) => {
            res.json(category);
        })
    },


    updateById: (req, res) => {
        CategoryGateway.updateById(req.body.id) .then((category) => {
            res.json(category);
        })
    },

    findById: (req, res) => {
        CategoryGateway.findById(req.body.id).then((category) => {
            res.json(category);
        })
    },


    deleleById: (req, res) => {
        CategoryGateway.deleleById(req.body.id).then((result) => {
            res('deleted sucessfully!');
        })
    }
}


