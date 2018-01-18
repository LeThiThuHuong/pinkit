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

    update: (id, data) => {
        return new Promise((resolve, reject) => {
            Ingredient.update({id: id, name: name, amount: amount, shop: shop}, (err, ingredinet) => {
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

    findById: (id, data) => {
        return new Promise((resolve, reject) => {
            Ingredient.findById(id, (err, ingredient) => {
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
            Ingredient.deleteById(id, (err, ingredient) => {
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