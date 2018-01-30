import {CategoryGateway} from "../../database/gateway/CategoryGateway";

export const CategoryController = {
    create: (req, res) => {
        CategoryGateway.create(req.body).then((category) => {
            res.json({category: category, status: 200, msg: 'successfully!'});
        })
    },


    updateById: (req, res) => {
        const {name, season} = req.body;
        CategoryGateway.updateById(req.params.categoryId, {name, season}).then((category) => {
            res.json({category: category, status: 200, msg: 'successfully!'});
        })
    },

    findById: (req, res) => {
        CategoryGateway.findById(req.params.categoryId).then((category) => {
            res.json(category);
        })
    },


    deleleById: (req, res) => {
        CategoryGateway.deleteById(req.params.categoryId).then((result) => {
            res.status(200).send('deleted sucessfully!');
        })
    }
}


