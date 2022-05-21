import React from 'react'

export default function Card({movie}) {
    const formatDate = (date)=> {
        let [yy, mm, dd] = date.split("-")
        return [dd, mm, yy].join("-")
    }

    const addLocal = () =>{
        let storeMovie = sessionStorage.movies
        ? sessionStorage.movies.split(",")
        : [];
        if(!storeMovie.includes(movie.id.toString())){
            storeMovie.push(movie.id)
            sessionStorage.movies = storeMovie;
        }
    }
  return (
    <div className='card'>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} alt="poster" />
        <p>{movie.overview}</p>
        <h4>{formatDate(movie.release_date)}</h4>
        <h5>{movie.vote_average}/10⭐️</h5>
        <div className='btn' onClick={() => addLocal()}>Ajouter à la watchlist💝</div>
    </div>
  )
}
