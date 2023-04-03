import { useState, useEffect } from "react";
import * as moviesAPI from "../../utilities/movies-api";
import MovieItems from "../../components/MovieItems/MovieItems";

export default function MovieListPage({ library, setLibrary }) {
  const [libraryList, setLibraryList] = useState([]);
   
  useEffect(function() {
    async function getLibrary() {
      const allMovies = await moviesAPI.getLibrary();
      setLibraryList(allMovies)
    }
    getLibrary();
  }, []);

  const movieList = libraryList.map((movie) => (
    <MovieItems movie={movie} />
  ));

  return (
    <>
    <h1 class="title">Movie Library</h1>
    <div class="columns is-multiline mx-4">
      {movieList}
    </div>
    </>
  )

}