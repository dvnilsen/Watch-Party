
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchItems from '../../components/SearchItems/SearchItems';
import * as moviesApi from "../../utilities/movies-api";

//require("dotenv").config(); 

// `https://www.omdbapi.com/?apikey=acd8ae1a&t=${searchTerm}`


export default function SearchPage({ movies, setMovies, searchTerm, setSearchTerm, getMovies }) {

  const searchObjects = movies.map((m) => <SearchItems movie={m} />);
  const navigate = useNavigate(); 

  return (
    <>
    <h1 class="title">Search For Movies</h1>
      <div class="box px-6 mx-5">
      <input class="input my-4" value={searchTerm} name="Search" onChange={(evt) => setSearchTerm(evt.target.value)}/>
      <button class="button is-primary" onClick={getMovies}>Search Movies</button>
      <button class="button is-link" onClick={() => navigate("/library")}>Go To My Movies</button>
      </div>
      <hr/>

      <ul>
          <div class="columns is-multiline mx-4">
            {searchObjects}
          </div>
      </ul>
  
    </>
  );
}
