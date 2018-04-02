import Category from '../model/Category';
import { NotFound } from '../../express/Exception';

export const CategoryGateway = {
    create: (createCategoryData) => {
        return new Promise((resolve, reject) => {
            Category.create(createCategoryData, (err, Category) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(Category);
                }
            });
        });
    },

    updateById: (id, data) => {
        return new Promise((resolve, reject) => {
            Category.findByIdAndUpdate({'_id': id}, data, (err, category) => {
                if (err){
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        resolve('Category.NotFound');
                    }
                }
            });
        });
    },


    findById: (id) => {
        return new Promise((resolve, reject) => {
            Category.findById({'_id': id}, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        resolve('Category.NotFound');
                    }
                }
            });
        });
    },

    findAllWithKeyword: (filter, offset, limit, order) => {
        return new Promise((resolve, reject) => {
            Category.find(filter)
            .skip(offset)
            .limit(limit)
            .sort(order)
            .exec((err, category) => {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        reject(new NotFound ('Category not found'));
                    }
                }
            })
        })
    },

    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            Category.remove({'_id': id}, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve('deleted completely!');
                    } else {
                        resolve('Category.NotFound');
                    }
                }
            });
        });
    },

    getCategory: (category) => {
        return new Promise((resolve, reject) => {
            Category.find({'food': food}, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(category);
                }
            });
        });
    },

    getCategoryById: (id) => {
        return new Promis((resolve, reject) => {
            Category.findById({'_id': id}, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        resolve('Category.NotFound');
                    }
                }
            });
        });
    }
}