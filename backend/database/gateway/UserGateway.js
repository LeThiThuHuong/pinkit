import User from '../model/User';
import { InvalidParams, NotFound } from '../../express/Exception';
const bccrypt = require('bcrypt');


export const UserGateway = {
    create: (userData) => {
        return new Promise((resolve, reject) => {
            User.create(userData, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                }
            })
        })
    },

    updateById: (id, data) => {
        return new Promise((resolve, reject) => {
            User.findByIdAndUpdate({ '_id': id }, data, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve('updated completely');
                    } else {
                        resolve('User.NotFound');
                    }
                }
            })
        })
    },

    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            User.remove({ '_id': id }, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve('delete successfully');
                    } else {
                        resolve('User.NotFound');
                    }
                }
            })
        })
    },

    findById: (id, data) => {
        return new Promise((resolve, reject) => {
            User.findById({ '_id': id }, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve(user);
                    } else {
                        resolve('User.NotFound');
                    }
                }
            })
        })
    },


    findAllWithKeyword: (filter, offset, limit, order) => {

        return new Promise((resolve, reject) => {
            User.find(keyword).
                skip(offset).
                limit(limit).
                sort(order).
                exec((err, user) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(user);
                    }
                })
        })
    },

    getUser: () => {
        return new Promise((resolve, reject) => {
            User.find((err, User) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(User);
                }
            })
        })
    },

    getUserById: (id) => {
        return new Promise((resolve, reject) => {
            User.findById({ _id: id }, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve(user);
                    } else {
                        reject(new NotFound('User not found'));
                    }
                }
            })
        })
    },

    authenticate: (username, password) => {
        return new Promise((resolve, reject) => {
            User.findOne({username: username, password: password}, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        bccrypt.hash(user.password, 10, (err, hash) => {
                            if (err) {
                                reject(err);
                            } else {
                                user.password = hash;
                                console.log(user.password);
                            }
                        })
                        resolve(user);
                    } else {
                        reject(new InvalidParams('user not found'))
                    }
                }
            })
        })
    }
    
}
