const mongoose = require('mongoose')


// Step 2 => Create schema
var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
},
    {
        timestamps: true
    })


// step 3 => Create Modal

module.exports = Users = mongoose.model("Users", userSchema);
