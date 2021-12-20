import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = ({movies}) => {

    const {id}=useParams()
    console.log(movies.find(el=>el.id==id))
    return (
        <div>
            {id}
        </div>
    )
}

export default MovieDetails