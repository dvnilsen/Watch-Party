import { useParams, Link, useNavigate } from "react-router-dom";

export default function MovieDetailPage({ movies }) {
    const {movieId} = useParams();
    const movie = movies.find(m => m.imdbID === movieId)
    const navigate = useNavigate();

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
            <button class="button is-primary">Add To Library</button>
            </footer>
        </ul>
        <hr/>
        </>
    )
}