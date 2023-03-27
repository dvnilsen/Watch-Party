
import { useState, useEffect } from 'react';
import axios from "axios"; 
//require("dotenv").config(); 

// `https://www.omdbapi.com/?apikey=acd8ae1a&t=${searchTerm}`


export default function HomePage() {
  const [data, setData] = useState({});

  const fetchData = async function() {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=acd8ae1a&t=star+wars`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };

  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
  
    </>
  );
}
