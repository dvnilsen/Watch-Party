
export default function SearchItems({ movie }) {
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