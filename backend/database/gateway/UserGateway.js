import User from '../model/User';

export const UserGateway = {
    create: (createUserData) => {
        return new Promise((resolve, reject) => {
            UserAdmin.create(createUserData, (err, user) => {
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
                        resolve('User.NotFound');
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
                        resolve('User.NotFound');
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
                        resolve('User.NotFound');
                    }
                }
            })
        })
    }

}
