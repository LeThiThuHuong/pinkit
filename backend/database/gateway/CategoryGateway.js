import Category from '../model/Category';
import { resolve } from 'url';
import { error } from 'util';

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
            Category.updateById({id: id}, data, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve('updated completely!');
                    } else {
                        resolve('no data to update');
                    }
                }
            });
        });
    },

    findById: (id) => {
        return new Promise((resolve, reject) => {
            Category.findById({id: id}, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve(category);
                    } else {
                        resolve('data not found!');
                    }
                }
            });
        });
    },

    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            Category.delete({id: id}, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    if (category) {
                        resolve('deleted completely!');
                    } else {
                        resolve('no data to delete');
                    }
                }
            });
        });
    }
}