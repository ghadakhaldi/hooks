import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = ({movies}) => {

    const {title}=useParams()
    const movie=movies.find(el=>el.title==title)
    return (
        <div>
        <h1> {movie.title}</h1>
        <iframe src={movie.trailer}> </iframe>
        </div>
    )
}

export default MovieDetails