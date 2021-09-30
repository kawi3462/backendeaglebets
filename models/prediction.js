const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const predictionSchema = new Schema({

    prediction: {
        // fixtureId: {
        //     type: Schema.Types.ObjectId,
        //     ref: "Fixture"

        // },
        fixtureId: String,
        tip: String,
        category: String,

        odd: Number,
        status: String,
        date: Date




    }


});

module.exports = mongoose.model('Prediction', predictionSchema);