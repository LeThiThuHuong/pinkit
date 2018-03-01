const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    age: Number,
    name: {
        firstname: String,
        lastname: String
    },
    gender: String,
    email: String,
    password: String
})

const User = mongoose.model('User', UserSchema);

export default User;




