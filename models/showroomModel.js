const mongoose = require("mongoose");

const showroomSchema = mongoose.Schema({
    name:{
        type: String,
        required: true, 
        unique: true
    },

    address:{
        type: String,
        default: ""
        
    },
    hours:{
        type: String,
        default: ""


    },
    services:{
        type: [String]
    }
})


const Showroom = mongoose.model('Showroom', showroomSchema);
module.exports = Showroom;

