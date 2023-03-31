import { Link } from "react-router-dom";

export default function MovieItems({ movie }) {
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
            <Link to={`/${movie.imdbID}`}>View Movie</Link>
            </footer>
        </ul>
        <hr/>
        </>

    )
}