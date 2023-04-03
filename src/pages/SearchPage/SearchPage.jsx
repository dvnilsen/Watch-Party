
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchItems from '../../components/SearchItems/SearchItems';
import * as moviesApi from "../../utilities/movies-api";

//require("dotenv").config(); 

// `https://www.omdbapi.com/?apikey=acd8ae1a&t=${searchTerm}`


export default function SearchPage({ movies, setMovies, searchTerm, setSearchTerm, getMovies }) {

  const searchObjects = movies.map((m, idx) => <SearchItems movie={m} key={idx}/>);
  const navigate = useNavigate(); 

  return (
    <>
    <h1 class="title my-4">Search For Movies</h1>
      <div class="box px-6 mx-5">
      <input class="input my-4" value={searchTerm} name="Search" onChange={(evt) => setSearchTerm(evt.target.value)}/>
      <button class="button is-primary mx-2" onClick={getMovies}>Search Movies</button>
      <button class="button is-link mx-2" onClick={() => navigate("/library")}>Go To My Movies</button>
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
