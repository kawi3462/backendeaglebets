const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    user: {
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        }

    }




});

module.exports = mongoose.model('User', userSchema);