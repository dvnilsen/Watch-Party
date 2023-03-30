const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    imdbID: {
        type: String,
        required: true
    },
    Poster: {
        type: String,
        required: true
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
 }, {
        timestamps: true

});

module.exports = mongoose.model('Movie', movieSchema);