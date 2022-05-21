import axios from 'axios';
import React from 'react'
import Card from "./Card"
import { useState, useEffect } from "react";

export default function Discover() {
const [movies, setMovies] = useState([]);
const [movies2, setMovies2] = useState([])
const [search, setSearch] = useState("");

useEffect(() => {
const fetchData = async ()=> {
    const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ee47b89b75cb56983d4f8026ef0c04af&query=${search}&language=en-US&page=1&include_adult=false`)
    let finalResult = result.data.results;
    setMovies(finalResult);

    const random = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=ee47b89b75cb56983d4f8026ef0c04af&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)

    const finalRandom = random.data.results;
    setMovies2(finalRandom)

    finalRandom.map((movie) =>(
        movie
    ))

    console.log(finalRandom);
}



fetchData()
  
}, [search]);


  return (
    <div className='show-movies'>
    <div className='search-form'>
        <form>
            <input type="search" placeholder="search movie"
            onChange={(e) => setSearch(e.target.value)} />
            <input type="submit" value="Recherche" />
        </form>
    </div>
    {(search.length ? movies : movies2)
    .slice(0,12)
    .sort((a, b) => {
        return b.vote_average - a.vote_average
    })
    .map((movie) => (
        <Card  key={movie.id} movie={movie}/>
    ))}


    </div>
  )
}
