import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as moviesAPI from "../../utilities/movies-api"; 

export default function MovieDetailPage({ movies, user }) {
    const {movieId} = useParams();
    const apiMovie = movies.find(m => m.imdbID === movieId)
    const [movie, setMovie] = useState(null || apiMovie);
    const navigate = useNavigate();

    useEffect(function() {
        async function getMovie() {
          const dbMovie = await moviesAPI.getMovieDetail(apiMovie.imdbID);
          if (dbMovie) setMovie(dbMovie)
        }
        getMovie();
      }, [])

    async function addMovie(movie) {
        const newMovie = await moviesAPI.createMovie(movie);
        const updatedMovie = {...newMovie}
        setMovie(updatedMovie);
        }

    return (
        <>
        <ul class="card">
            <div class="card-image">
                <img src={movie.Poster}/>
            </div>
            <li>Title: {movie.Title}</li>
            <li>Release Year: {movie.Year}</li>
            <div class="content">
                <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDb Page</a>
            </div>
            <footer>
            <button class="button is-primary" onClick={() => addMovie(movie)}>{movie.users && movie.users.includes(user._id) ? "Remove From Library" : "Add To Library"}</button>
            </footer>
        </ul>
        <hr/>
        </>
    )
}