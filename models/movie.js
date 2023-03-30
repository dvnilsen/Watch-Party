const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    imdb: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
 }, {
        timestamps: true

});

module.exports = mongoose.model('Movie', movieSchema);