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

    update: (id, data) => {
        return new Promise((resolve, reject) => {
            UserAdmin.update({ id: id, username: username, password: password }, (err, user) => {
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        user.update({
                            id: id,
                            username: username,
                            password: password
                        })
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
            UserAdmin.delete(id, (err, user) => {
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
            UserAdmin.findById(id, (err, user) => {
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
