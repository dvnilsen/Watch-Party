
import { useState } from 'react';
import SearchItems from '../../components/SearchItems/SearchItems';
import * as moviesApi from "../../utilities/movies-api";

//require("dotenv").config(); 

// `https://www.omdbapi.com/?apikey=acd8ae1a&t=${searchTerm}`


export default function SearchPage({ movies, setMovies, searchTerm, setSearchTerm, getMovies }) {

  const searchObjects = movies.map((m) => <SearchItems movie={m} />);

  return (
    <>

      <input class="control" value={searchTerm} name="Search" onChange={(evt) => setSearchTerm(evt.target.value)}/>
      <button class="button is-primary" onClick={getMovies}>Fetch Data</button>
      <hr/>

      <ul>
          <div class="columns is-multiline mx-4">
            {searchObjects}
          </div>
      </ul>
  
    </>
  );
}
