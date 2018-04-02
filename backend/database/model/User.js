const mongoose = require('mongoose');
const bccrypt = require('bcrypt');


const UserSchema = new mongoose.Schema({
    id: String,
    username: {
        type: String,
        unique: true
    },
    age: Number,
    name: {
        firstname: String,
        lastname: String,
    },
    gender: String,
    email: String,
    password: {
        type: String,
        unique: true
    }
})


const User = mongoose.model('User', UserSchema);

export default User;




