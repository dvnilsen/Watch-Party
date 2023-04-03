import { Link } from "react-router-dom";

export default function MovieItems({ movie }) {
    return (
        <>
        <div class="column is-one-third">
            <ul class="box">
                <div>
                    <img src={movie.Poster}/>
                </div>
                <li>Title: {movie.Title}</li>
                <li>Release Year: {movie.Year}</li>
                <div class="content">
                    <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDb Page</a>
                </div>
                <footer>
                <Link to={`/library/${movie.imdbID}`}>View Movie Page</Link>
                </footer>
            </ul>
        </div>
        <hr/>
        </>

    )
}