import { useParams } from "react-router-dom";

export default function LibraryDetailPage( {library }) {
    const {movieId} = useParams();
    const movie = library.find(m => m._imdbID === movieId)
    
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
            </footer>
        </ul>
        <hr/>
        </>

    )
}