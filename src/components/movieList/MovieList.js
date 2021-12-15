
import React from 'react'
import MovieCard from '../movieCard/MovieCard'


function MovieList({movies}) {

    return (
        <div className="contain">
            {movies.map((el)=><MovieCard el={el} key={el.id}/>)}
        </div>
    )
}

export default MovieList
