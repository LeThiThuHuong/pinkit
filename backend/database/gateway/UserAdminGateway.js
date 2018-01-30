import UserAdmin from '../model/UserAdmin';
import { resolve } from 'path';

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
                        resolve('no date updated');
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
                        resolve('no data to delete');
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
                        resolve({ error: 'user not found' });
                    }
                }
            })
        })
    }

}
