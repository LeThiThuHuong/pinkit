import Ingredient from '../model/Ingredient';
import { NotFound } from '../../express/Exception';

export const IngredientGateway = {
    create: (createIngredientData) => {
        return new Promise((resolve, reject) => {
            Ingredient.create(createIngredientData, (err, ingredient) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(ingredient);
                }
            });
        });
    },

    updateById: (id, data) => {
        return new Promise((resolve, reject) => {
            Ingredient.findByIdAndUpdate({ '_id': id }, data, (err, ingredinet) => {
                if (err) {
                    reject(err);
                } else {
                    if (ingredinet) {
                        resolve('updated completely');
                    } else {
                        resolve('Ingredient.NotFound');
                    }
                }
            });
        });
    },

    findById: (id) => {
        return new Promise((resolve, reject) => {
            Ingredient.findById({ '_id': id }, (err, ingredient) => {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve(ingredient);
                    } else {
                        resolve('Ingredient.NotFound');
                    }
                }
            });
        });
    },

    findAllWithKeyWord: (filter, offset, limit, order) => {
        return new Promise((resolve, reject) => {
            Ingredient.find(filter)
                .skip(offset)
                .limit(limit)
                .sort(order)
                .exec((err, ingredient) => {
                    if (err) {
                        reject(err);
                    } else {
                        if (ingredient) {
                            resolve(ingredient);
                        } else {
                            reject(new NotFound('Ingredient not found'));
                        }
                    }
                })
        })
    },


    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            Ingredient.remove({ '_id': id }, (err, ingredient) => {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve('deleted completely');
                    } else {
                        resolve('Ingredient.NotFound');
                    }
                }
            })
        })
    },


    getIngredient: (ingredientName) => {
        return new Promise((resolve, reject) => {
            Ingredient.find({ 'ingredient': ingredient }, (err, ingredient) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(ingredient);
                }
            });
        });
    },


    getIngredientById: (id) => {
        return new Promise((resolve, reject) => {
            Ingredient.findById({ '_id': id }, (err, ingredient) => {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve(ingredient);
                    } else {
                        resolve('Ingredient.NotFound');
                    }
                }
            });
        })
    }
}