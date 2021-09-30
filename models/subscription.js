const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    subscription: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        amount: {
            type: String,
            required: true
        },
        subscription_date: {
            type: Date,
            required: true,
        },
        expiry_date: {
            type: Date,
            required: true,
        },
        plan: {
            type: String,
            required: true
        }


    }




});

module.exports = mongoose.model('Subscription', subscriptionSchema);