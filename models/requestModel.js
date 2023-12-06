// const mongoose = require('mongoose');

// const requestSchema = new mongoose.Schema({
//     service:{
//         type: String,
//         required: [true, 'A service is required'],

//     }, 
//     showroom:{
//         type:String,
//         required: [true, 'A password is required']
//     },
//     username:{
//         type: String,
//         required: [true, 'A role is required'],
        
//     },
//     fields:{
//         type: [String],
//         required: true,
        
//     },
//     values:{
//         type: [String],
//         required: true,
        
//     },
//     status: String
// });

// const Request = mongoose.model('Request', requestSchema);
// module.exports = Request;


const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    service:{
        type: String,
        required: [true, 'A service is required'],
    }, 
    showroom:{
        type: String,
        required: [true, 'A showroom is required']
    },
    username:{
        type: String,
        required: [true, 'A username is required'],
    },
    fields:{
        type: [String],
        validate: {
            validator: function(value) {
                return value.length > 0; // Check if the array is not empty
            },
            message: 'Fields array must not be empty'
        },
        required: true,
    },
    values:{
        type: [String],
        validate: [{
            validator: function(value) {
                // Check if the array is not empty and has the same length as 'fields'
                return value.length > 0 && value.length === this.fields.length;
            },
            message: 'Values array must not be empty and must have the same number of items as fields'
        }, 
        {
            validator: function(value) {
                // Check if all elements in the array are non-empty strings
                // this fixes the issue I had during the presentation 
                // when I was able to submit a request with an empty field
                return value.every(val => val.trim().length > 0);
            },
            message: 'Values array cannot contain empty strings'
        }],
        required: true,
    },
    status:{
        type: String,
        default: "pending"
    }
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
