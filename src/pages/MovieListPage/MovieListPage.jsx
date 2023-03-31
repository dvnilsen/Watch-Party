import { useState, useEffect } from "react";
import * as moviesAPI from "../../utilities/movies-api";
import MovieItems from "../../components/MovieItems/MovieItems";

export default function MovieListPage({ library }) {

    
      const movieList = library.map((movie) => (
        <MovieItems movie={movie} />
      ));

      return (
        <>
        <h1 class="title">Movie Library</h1>
        {movieList}
        </>
      )

}