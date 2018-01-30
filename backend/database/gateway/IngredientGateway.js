import Ingredient from '../model/Ingredient';
import { resolve } from 'url';

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
            Ingredient.findByIdAndUpdate({'_id': id}, data, (err, ingredinet) => {
                if (err) {
                    reject(err);
                } else {
                    if (ingredinet) {
                        resolve('updated completely');
                    } else {
                        resolve('no data to update');
                    }
                }
            });
        });
    },

    findById: (id) => {
        return new Promise((resolve, reject) => {
            Ingredient.findById({'_id': id}, (err, ingredient) => {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve(ingredient);
                    } else {
                        resolve('data not found');
                    }
                }
            });
        });
    },

    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            Ingredient.remove({'_id': id}, (err, ingredient) => {
                if (err) {
                    reject(err);
                } else {
                    if (ingredient) {
                        resolve('deleted completely');
                    } else {
                        resolve('no data to delete');
                    }
                }
            });
        });
    }
}