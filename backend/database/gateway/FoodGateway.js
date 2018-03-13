import Food from '../model/Food';
import { debuglog } from 'util';

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
            Food.findByIdAndUpdate({ '_id': id }, data, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        resolve('Food.NotFound');
                    }
                }
            });
        });
    },


    findById: (id) => {
        return new Promise((resolve, reject) => {
            Food.findById({ '_id': id }, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        resolve('Food.NotFound');
                    }
                }
            });
        });
    },


    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            Food.remove({ '_id': id }, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve('delete completely');
                    } else {
                        resolve('Food.NotFound');
                    }
                }
            });
        });
    },

    getFood: (id) => {
        return new Promise((resolve, reject) => {
            Food.find({ 'food': food }, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(food);
                }
            });
        });
    },

    getFoodById: (id) => {
        return new Promise((resolve, reject) => {
            Food.findById({ '_id': id }, (err, food) => {
                if (err) {
                    reject(err);
                } else {
                    if (food) {
                        resolve(food);
                    } else {
                        resolve('Food.NotFound')
                    }
                }
            });
        });
    }
}