
import { useState } from 'react';
import axios from "axios"; 
import * as moviesApi from "../../utilities/movies-api";

//require("dotenv").config(); 

// `https://www.omdbapi.com/?apikey=acd8ae1a&t=${searchTerm}`


export default function SearchPage() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //const BaseUrl = "https://www.omdbapi.com/?apikey="; 
  const apiKey = process.env.API_KEY;

  const fetchData = async function() {
    // try {
    //   const response = await axios.get(`https://www.omdbapi.com/?apikey=acd8ae1a&s=star+wars`);
    //   setData(response.data);
    //   //const response = fetch(`https://www.omdbapi.com/?apikey=acd8ae1a&s=star+wars`);

    // } catch (error) {
    //   console.error(error);
    // }
    // console.log(data);
    // //console.log(data.title); 
    const searchResults = await moviesApi.search(searchTerm);
    setData(searchResults);
  };

  const movies = data.map(m => <p>{m.Title}</p>)

  return (
    <>
      <input value={searchTerm} name="Search" onChange={(evt) => setSearchTerm(evt.target.value)}/>
      <button class="button is-primary" onClick={fetchData}>Fetch Data</button>
      <ul>
        <li>{movies}</li>
      </ul>
  
    </>
  );
}
