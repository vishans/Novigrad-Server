const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'A username is required'],
        unique: [true, 'User name must be unique']
    }, 
    password:{
        type:String,
        required: [true, 'A password is required']
    },
    role:{
        type: String,
        required: [true, 'A role is required'],
        lowercase: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;