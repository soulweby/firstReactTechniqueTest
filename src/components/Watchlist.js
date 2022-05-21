import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import Card from './Card';

export default function Watchlist() {

    const [watchlist, setWatchlist] = useState([]);
    useEffect(() => {
      
          const fmovieId = sessionStorage.movies
           ? sessionStorage.movies.split(",")
           :[];

           const fetchData = async ()=>{
                for (let i = 0; i < fmovieId.length; i++) {
                let result = await axios.get(`https://api.themoviedb.org/3/movie/${fmovieId[i]}?api_key=ee47b89b75cb56983d4f8026ef0c04af&language=fr-FR`)
                 let finalResult = result.data;
                 setWatchlist((watchlist) => [...watchlist, finalResult])
            }
               
           }

           fetchData();
       
    }, []);
  return (
    <div className='card'>
    {watchlist.map((movie, index) => (
        <Card key={index} movie={movie} />
    ))}

    </div>
  )
}
 