import Food from '../model/Food';
import { resolve } from 'url';


export const FoodGateway = {
    create: (createFoodData) => {
        return new Promise((resolve, reject) => {
            Food.create(createFoodData, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(food);
                }
            });
        });
    },

    updateById: (id, data) => {
        return new Promise((resolve, reject) => {
            Food.update({id: id}, data, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
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
            Food.findById({id: id}, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        resolve('data not found');
                    }
                }
            });
        });
    },


    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            Food.deleteById({id: id}, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve('delete completely');
                    } else {
                        resolve('no data to delete');
                    }
                }
            });
        });
    }
}