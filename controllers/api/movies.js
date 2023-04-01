const fetch = require("node-fetch");
const Movie = require("../../models/movie");

module.exports = {
    searchApi,
    create,
    getMovieDetail,
    getLibrary
}

async function searchApi(req, res) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${req.query.Search}`)
    .then(res => res.json())
    .then(data => data.Search);
    res.json(movies);
}

async function create(req, res) {
    try {
        console.log(req.body); 
        const movie = await Movie.findOne({imdbID: req.body.imdbID})
        if (movie) {
            if (movie.users.includes(req.user._id)) {
                movie.users.remove(req.user._id);
            } else {
                movie.users.push(req.user._id)
            }
            await movie.save();
            res.json(movie);
        } else {
        req.body.users = req.user._id
        const newMovie = await Movie.create(req.body);
        await newMovie.save();
        res.json(newMovie);
        }
    } catch (err) {
        res.status(400).json(err)
    }
}

async function getMovieDetail(req, res) {
    const movie = await Movie.findOne({imdbID: req.params.imdbID});
        res.json(movie);
}

async function getLibrary(req, res) {
    try {
        req.body.user = req.user._id
        const library = await Movie.find({users: req.user._id});
        res.json(library);
    } catch (err) {
        res.status(400).json(err)
    }
}