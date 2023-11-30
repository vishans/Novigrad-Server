const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'A service must have a name'],
        unique: true
    },
    requiredDocuments:{
        type:[String],
        validate: {
            validator: function(arr) {
                // Custom validation logic
                return arr.length > 0; // Ensures the array is not empty
            },
            message: 'At least one required document must be specified'
        }
    }
})


const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;