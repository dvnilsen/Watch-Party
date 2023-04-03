import { Link, useNavigate } from "react-router-dom";

export default function MovieItems({ movie }) {
    const navigate = useNavigate(); 
    return (
        <>
        <div class="column is-one-third">
            <ul class="box">
                <div>
                    <img src={movie.Poster}/>
                </div>
                <li>{movie.Title}</li>
                <li>Release Year: {movie.Year}</li>
                <div class="content">
                    <a href={`https://www.imdb.com/title/${movie.imdbID}`}>IMDb Page</a>
                </div>
                <footer>
                <button class="button is-link" onClick={() => navigate(`/library/${movie.imdbID}`)}>View Title</button>
                </footer>
            </ul>
        </div>
        <hr/>
        </>

    )
}