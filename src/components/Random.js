import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
import Card from './Card';

export default function Random() {
    const [randomMovie, setrandomMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
    const random = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ee47b89b75cb56983d4f8026ef0c04af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)

    const  finalRandom = random.data.results;

    finalRandom.map((movie) =>(
        movie
    ))

    setrandomMovie(finalRandom);
        }

        fetchData()
       
    }, []);
  return (
    <div>
   {
    randomMovie.map((movie) => (
        <Card  key={movie.id} movie={movie}/>
    ))
   }
    </div>
  )
}
