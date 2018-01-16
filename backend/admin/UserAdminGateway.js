import UserAdmin from '../admin/UserAdmin';
import { resolve } from 'path';

export const UserAdminGateway = {
    create: (createUserAdminData) => {
        return new Promise((resolve, reject) => {
            UserAdmin.create(createUserAdminData, (error, user) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(user);
                };
            });
        });
    },

    update: (username, password) => {
        return new Promise((resolve, reject) => {
            UserAdmin.update({username: username, password: password}, (err, user) =>{
                if (err) {
                    reject(err);
                } else {
                    if (user) {
                        user.delete(password, username);
                        user.update({
                            username: username,
                            password: password
                        })
                        resolve ('updated completely');
                    }
                }
            })
        })
    }
}