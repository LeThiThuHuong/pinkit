const mongoose = require('mongoose');

const UserAdminSchema = new mongoose.Schema({
    userName: String,
    age: Number,
    name: {
        firstname: String,
        lastname: String
    },
    gender: String,
    email: String,
    password: String
})

const UserAdmin = mongoose.model('UserAdmin', UserAdminSchema);

export default UserAdmin;




