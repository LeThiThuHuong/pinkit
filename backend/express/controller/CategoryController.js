import { CategoryGateway } from '../../database/gateway/CategoryGateway';
import { NotFound } from '../../express/Exception';

export const CategoryController = {
    create: (req, res, next) => {
        CategoryGateway.create(req.body).then((category) => {
            res.json({ category: category, status: 200, msg: 'successfully!' });
        }).catch(err => {
            return next(err);
        })
    },


    updateById: (req, res, next) => {
        const { name, season } = req.body;
        CategoryGateway.updateById(req.params.categoryId, { name, season }).then((category) => {
            res.json({ category: category, status: 200, msg: 'successfully!' });
        }).catch(err => {
            return next(err);
        })
    },

    findById: (req, res, next) => {
        CategoryGateway.findById(req.params.categoryId).then((category) => {
            res.json(category);
        }).catch(err => {
            return next(err);

        })
    },

    findAllWithKeyword: (req, res) => {
        const filter = req.query.filter || {};
        const offset = Number(req.query.offset || 0);
        const limit = Number(req.query.limit || 10);
        const order = { date_added: -1 };
        CategoryGateway.findAllWithKeyword(filter, offset, limit, order).then((category) => {
            res.json({ category: category, status: 200, msg: 'successfully!' });
        }).catch(err => {
            return next(err);
        })
    },

    deleleById: (req, res, next) => {
        CategoryGateway.deleteById(req.params.categoryId).then((result) => {
            res.status(200).send('deleted sucessfully!');
        }).catch(err => {
            return next(err);
        })
    },

    getCategory: (req, res, next) => {
        CategoryGateway.getCategory(req.params.category).then((category) => {
            res.json({ category: category, status: 200 });
        }).catch(err => {
            return next(err);
        })
    },

    getCategoryById: (req, res, next) => {
        CategoryGateway.getCategoryById(req.params.categoryId).then((category) => {
            res.json({ category: category, status: 200 });
        }).catch(err => {
            return next(err);
        })
    }


}


