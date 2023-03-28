const fetch = require("node-fetch");

module.exports = {
    searchApi,
}

async function searchApi(req, res) {
    console.log(req.query.Search); 
    const movies = await fetch(`https://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${req.query.Search}`)
    .then(res => res.json())
    .then(data => data.Search);
    res.json(movies);
}