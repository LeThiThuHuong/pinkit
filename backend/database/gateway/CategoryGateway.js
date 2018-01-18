import Category from '../model/Category';
import { resolve } from 'url';
import { error } from 'util';

export const CategoryGateway = {
    create: (createCategoryData) => {
        return new Promise((resolve, reject) => {
            Category.create(createCategoryData, (err, category) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(category);
                }
            });
        });
    },

    update: (id, data) => {
        return new Promise((resolve, reject) => {
            Category.update({ id: id, name: name, season: season, imageDemo: imageDemo, stories: stories }, (err, category) => {
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

    findById: (id, data) => {
        return new Promise((resolve, reject) => {
            Category.findById(id, (err, category) => {
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
            Category.delete(id, (err, category) => {
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