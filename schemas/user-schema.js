const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, 'User ID is required']
    },  
    name: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'E-mail is required']
    },
    password: {
        type: String,
        required: [true, 'Passowrd is required']
    },
    role: {
        type: String,
        required: [true, 'Role is required']
    }
})

module.exports =  mongoose.model('User', userSchema);