
import { useState } from 'react';
import SearchItems from '../../components/SearchItems/SearchItems';
import * as moviesApi from "../../utilities/movies-api";

//require("dotenv").config(); 

// `https://www.omdbapi.com/?apikey=acd8ae1a&t=${searchTerm}`


export default function SearchPage() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //const BaseUrl = "https://www.omdbapi.com/?apikey="; 

  const fetchData = async function() {
    const searchResults = await moviesApi.search(searchTerm);
    setData(searchResults);
  };


  const searchObjects = data.map((m) => <SearchItems movie={m} />);

  return (
    <>

      <input class="control" value={searchTerm} name="Search" onChange={(evt) => setSearchTerm(evt.target.value)}/>
      <button class="button is-primary" onClick={fetchData}>Fetch Data</button>
      <hr/>

      <ul>
        {searchObjects}
      </ul>
  
    </>
  );
}
