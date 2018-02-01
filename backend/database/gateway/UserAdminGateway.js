import UserAdmin from '../model/UserAdmin';
import { resolve } from 'path';
import { NOTFOUND } from 'dns';

export const UserAdminGateway = {
    create: (createUserAdminData) => {
        return new Promise((resolve, reject) => {
            UserAdmin.create(createUserAdminData, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(user);
                };
            });
        });
    },

    updateById: (id, data) => {
        return new Promise((resolve, reject) => {
            UserAdmin.findByIdAndUpdate({'_id': id}, data, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve('updated completely');
                    } else {
                        resolve(NOTFOUND);
                    }
                }
            })
        })
    },

    deleteById: (id) => {
        return new Promise((resolve, reject) => {
            UserAdmin.remove({'_id': id}, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve('delete successfully');
                    } else {
                        resolve(NOTFOUND);
                    }
                }
            })
        })
    },

    findById: (id, data) => {
        return new Promise((resolve, reject) => {
            UserAdmin.findById({'_id': id}, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        resolve(user);
                    } else {
                        resolve(NOTFOUND);
                    }
                }
            })
        })
    }

}
