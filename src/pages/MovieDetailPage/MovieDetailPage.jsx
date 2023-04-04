import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import * as moviesAPI from "../../utilities/movies-api"; 

export default function MovieDetailPage({ library, movies, user }) {
    const {movieId} = useParams();
    const apiMovie = movies.find(m => m.imdbID === movieId)
    const libraryMovie = library.find(m => m.imdbID === movieId)
    const [movie, setMovie] = useState(libraryMovie || apiMovie);
    const navigate = useNavigate();
    const whichButton = movie.users && movie.users.includes(user._id); 

    useEffect(function() {
        async function getMovie() {
          const dbMovie = await moviesAPI.getMovieDetail(movie.imdbID);
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
        <ul class="card py-4 mx-5 my-4">
            <div class="card-image">
                <img src={movie.Poster}/>
            </div>
            <li>{movie.Title}</li>
            <li>Release Year: {movie.Year}</li>
            <div class="content">
                <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDb Page</a>
            </div>
            <hr />
            { whichButton ? <button class="button is-danger mx-2" onClick={() => addMovie(movie)}>Remove From My Movies</button> : <button class="button is-primary mx-2" onClick={() => addMovie(movie)}>Add To My Movies</button> }
            <button class="button is-link mx-2" onClick={() => navigate("/library")}>Go To My Movies</button>
        </ul>
        
        </>
    )
}