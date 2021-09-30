const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const fixtureSchema = new Schema({
    fixture: {
        id: Number,
        referee: String,
        timezone: String,
        date: Date,
        timestamp: String,
        periods: {
            first: String,
            second: String
        },
        venue: {
            id: Number,
            name: String,
            city: String
        },
        status: {
            long: String,
            short: String,
            elapsed: Number,
        }
    },
    league: {
        id: Number,
        name: String,
        country: String,
        logo: String,
        flag: String,
        season: String,
        round: String,
    },
    teams: {
        home: {

            id: Number,
            name: String,
            logo: String,
            winner: Boolean
        },
        away: {

            id: Number,
            name: String,
            logo: String,
            winner: Boolean
        }
    },
    goals: {

        home: Number,
        away: Number,
    },

    score: {

        halftime: {
            home: Number,
            away: Number,
        },

        fulltime: {

            home: Number,
            away: Number,
        },

        extratime: {

            home: Number,
            away: Number,
        },
        penalty: {

            home: Number,
            away: Number
        }
    }

});

module.exports = mongoose.model('Fixture', fixtureSchema);
